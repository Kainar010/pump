import styled from 'styled-components';
// 公共样式
import { container } from '@/assets/style';

export const HeaderWrap = styled.div`
	${container};
	height: 72px;
	${({ theme }) => theme.palette.backgroundColor};
	box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.25);

	overflow: hidden;

	position: fixed;
	top: 0;
	z-index: 900;

	.header {
		height: inherit;

		display: flex;
		align-items: center;
		justify-content: space-between;

		user-select: none;

		/* 网站 Brand */
		.brand {
			display: flex;
			align-items: center;
			gap: 8px;

			.logo {
				width: 52px;
				height: 52px;
				border-radius: ${({ theme }) => theme.shape.borderRadius};

				object-fit: cover;
			}

			.title {
				margin: 0;
				font-size: 1.2rem;
			}
		}

		/* 操作栏 */
		.actions {
			display: flex;
			align-items: center;
			gap: 16px;

			margin-left: auto;
		}
	}
`;
