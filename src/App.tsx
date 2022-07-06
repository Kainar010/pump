// React & 周边库
import { BrowserRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@/store';

// 业务库
import { useEventListener } from 'ahooks';

// 工具函数
import { localStorage } from '@/utils';
import { theme } from '@/assets/theme';

// 组件
import {
	ConfigProvider as AntdConfigProvider,
	message,
	notification,
} from 'antd';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseLine } from '@/components/common';
import { CommonLayout } from '@/layout';

// 语言包
import enUS from 'antd/lib/locale/en_US';

// 配置 message
message.config({
	maxCount: 4,
});
// 配置 notification
notification.config({
	maxCount: 3,
});

function App() {
	// global state
	const user = useRecoilValue(userAtom);

	// Refresh the page and save the global state to the local for restoring the next time the page is opened
	useEventListener('beforeunload', () => {
		localStorage.set('user', user);
	});

	// 广告
	// useAd();

	return (
		<BrowserRouter>
			<StyledThemeProvider theme={theme}>
				<AntdConfigProvider locale={enUS}>
					<CssBaseLine />
					<CommonLayout />
				</AntdConfigProvider>
			</StyledThemeProvider>
		</BrowserRouter>
	);
}

export default App;
