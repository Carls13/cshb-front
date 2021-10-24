import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 500;

	${props => {
        if (props.isError) {
            return css`
				z-index: 1000;
			`;
        }
    }} 
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
	text-align: center;
	margin: 15% auto;
	padding: 20px;
	width: 50%;
	border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.8);
    
    p {
        text-align: center;
        color: black;
        font-size: 24px;
        margin: 10px auto;
    }

	@media screen and (max-width: 600px) {
		width: 90%;
	}`;

export const IconDiv = styled.div`
    font-size: 120px;
    ${props => !props.isError ?
        css`
        color: #168999;
    ` :
        css`
        color: #E6565C;
    `
    }
`;