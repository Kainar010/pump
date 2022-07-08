// React & React 周边
import { memo } from 'react';

// 业务库
// import { useCreation, useMemoizedFn } from 'ahooks';

// 组件
import { Typography, Button } from 'antd';
import { HeaderWrap } from './style';
// 媒体资源
import { favicon } from '@/assets/image';

export default memo(function Header() {
	return (
		<HeaderWrap>
			<header className="header">
				{/* 网站 Brand */}
				<div className="brand">
					<img src={favicon} alt="Zhandaua Logo" className="logo" />
					<Typography.Title className="title">Pump</Typography.Title>
				</div>

				{/* 操作栏 */}
				<div className="actions">
					<Button type="primary">Login</Button>
				</div>
			</header>
		</HeaderWrap>
	);
});
