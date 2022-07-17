/**
 * 高度自定义的 `localStorage` 工具函数
 *
 * 主要用于
 *     1. `recoil atom` 的初始化定义
 * 	   2. `axios` 请求拦截器
 * 	   3. 其他各种的 初始化任务
 *
 * 备注:
 *     写入数据前, 会先调用一次 `serializer`
 *     读取数据后, 会先调用一次 `deserializer`
 *     内置了版本检测, 需要在每次 `deploy` 至服务器时 手动修改版本号
 *
 * 修改时间: 2022-07-17
 */

export interface localStorageProperties {
	// 读
	get<T>(
		key: string,
		// 默认值
		defaultValue: T,
		// 反序列化方法
		deserializer?: (value: string) => T,
	): T;
	// 写
	set<T>(
		key: string,
		// 储存值
		value: T,
		// 序列化方法
		serializer?: (value: T) => string,
	): void;

	// 版本号
	_DATA_VERSION: string;
	// 检测版本号
	_checkDataVersion: (data: unknown) => boolean;
}

export const localStorage: localStorageProperties = {
	get(key, defaultValue, deserializer?) {
		let data = window.localStorage.getItem(key);

		// key 存在
		if (data) {
			// 外层反序列化
			let outerDeserializedData: { value: string } = JSON.parse(data);

			// 检测版本号
			if (this._checkDataVersion(outerDeserializedData)) {
				let deserializedData;
				// 执行反序列化
				try {
					deserializedData =
						deserializer?.(outerDeserializedData.value) ??
						JSON.parse(outerDeserializedData.value);
				} catch (error) {
					console.error(`localStorage.get 方法出错: \n${error}`);
					deserializedData = defaultValue;
				}

				return deserializedData;
			}
		}

		return defaultValue;
	},

	set(key, value, serializer?) {
		// 记录版本号
		let data = {
			version: this._DATA_VERSION,
			value: serializer?.(value) ?? JSON.stringify(value),
		};

		// 外层序列化
		let serializedData = JSON.stringify(data);

		window.localStorage.setItem(key, serializedData);
	},

	_DATA_VERSION: '1.0.0',

	_checkDataVersion(data) {
		// 数据是 对象类型 | null
		if (typeof data === 'object') {
			// 数据是 对象类型
			if (data) {
				// 数据包含 `version`, `value` 属性
				if (Object.hasOwn(data, 'version') && Object.hasOwn(data, 'value')) {
					// 检测版本号是否一致
					return (data as { version: string }).version === this._DATA_VERSION;
				}
			}
		}

		return false;
	},
};
