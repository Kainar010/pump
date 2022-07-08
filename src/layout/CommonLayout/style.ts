import styled from 'styled-components';

export const CommonLayoutStyledBox = styled.div`
	height: inherit;
	position: relative;

	display: flex;
	justify-content: center;

	background: #fff;
	background-image: linear-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 0),
		linear-gradient(90deg, rgba(0, 0, 0, 0.25) 1px, transparent 0),
		linear-gradient(#fff 1px, transparent 0),
		linear-gradient(90deg, #fff 1px, transparent 0);
	background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;
`;
