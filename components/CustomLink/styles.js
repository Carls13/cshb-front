import styled, { css } from "styled-components";

const activeStyle = css`
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
`;

export const Option = styled.span`
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 18px;
    padding: 10px;

    &:hover {
        ${activeStyle}
    }
    ${props => props.active ? activeStyle : null}
`;