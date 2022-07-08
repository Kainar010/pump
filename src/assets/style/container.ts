import { css } from 'styled-components';

export default css`
	width: 1000px;
	margin: 0 auto;
	padding: 0 24px;

	@media screen and (max-width: 1200px) {
		width: 800px;
	}

	@media screen and (max-width: 1000px) {
		width: 600px;
		padding: 0 16px;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
		padding: 0 8px;
	}
`;
