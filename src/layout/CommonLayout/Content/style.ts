import styled from 'styled-components';
// 公共样式
import { container } from '@/assets/style';

export const ContentStyledBox = styled.main`
	${container};
	padding-top: 16px !important;
	height: calc(100% - 72px);
	${({ theme }) => theme.palette.backgroundColor};

	position: relative;
	top: 72px;
	z-index: 800;

	overflow: hidden auto;
`;
