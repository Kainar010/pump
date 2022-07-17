import styled from 'styled-components';

export const PNFStyled = styled.div`
	background: repeating-linear-gradient(
			45deg,
			rgb(244, 195, 41),
			rgb(244, 195, 41) 35px,
			rgb(0, 0, 0) 35px,
			rgb(0, 0, 0) 71px
		)
		repeat scroll 0% 0%/100px 100px transparent;

	height: min(50%, 200px);
	transform: translateY(50%);

	display: flex;
	justify-content: center;
	align-items: center;

	.title {
		color: ${({ theme }) => theme.palette.error};
	}
`;
