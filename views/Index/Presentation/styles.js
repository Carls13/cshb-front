import styled, { css } from "styled-components";
import { columnContainer, pageDescription, rowContainer, section, sectionTitle } from "../../../theme/commonStyles";

export const Container = styled.section`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const Description = styled.p`
    ${pageDescription};
    width: 70%;
    margin: auto;
`;

export const Row = styled.div`
    ${rowContainer};
    margin: 15px 0;

    @media (max-width: 800px) {
        ${props => props.mobileReverse ? css`flex-direction: column-reverse` : null};
    }
`;

export const Column = styled.div`
    ${columnContainer};
`;

export const Image = styled.img`
    display: block;
    width: 70%;
    margin-left: auto;
    border-radius: 10px; 

    @media (max-width: 800px) {
        width: 100%;
    }
`;
