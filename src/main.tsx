// React & 周边库
import { StrictMode } from 'react';
import { render } from 'react-dom';

// 组件
import { SafeArea } from './components/common';
import App from './App';

render(
	<StrictMode>
		<RecoilRoot>
			<SafeArea>
				<App />
			</SafeArea>
		</RecoilRoot>
	</StrictMode>,
	document.getElementById('root'),
);
