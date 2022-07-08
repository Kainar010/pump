import { css } from 'styled-components';

export default (line: number) => css`
	& {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: ${line};
		-webkit-box-orient: vertical;
	}
`;
