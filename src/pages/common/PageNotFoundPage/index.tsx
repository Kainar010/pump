// 组件
import { Typography } from 'antd';
// 样式组件
import { PNFStyled } from './style';

export default function PageNotFoundPage() {
	return (
		<PNFStyled>
			<Typography.Title level={2} className="title">
				Page not found
			</Typography.Title>
		</PNFStyled>
	);
}
