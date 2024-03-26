import styled, { css } from "styled-components";
import { columnContainer, pageDescription, rowContainer, section, sectionTitle } from "../../../theme/commonStyles";

export const Container = styled.section`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Description = styled.p`
    ${pageDescription};
`;

export const Row = styled.div`
    ${rowContainer};
    margin: 20px 100px;

    @media (max-width: 800px) {
        ${props => props.mobileReverse ? css`flex-direction: column-reverse` : null};
        margin: 20px 10px;
    }
`;

export const Column = styled.div`
    ${columnContainer};

    h3 {
        margin-bottom: 15px;
    }

    p { 
        width: 100%;

        @media (max-width: 800px) {
            width: 100%;
            margin: unset;
        }
     }
`;

export const Image = styled.img`
    display: block;
    width: 80%;
    margin: auto;
    border-radius: 10px; 

    @media (max-width: 800px) {
        width: 100%;
    }
`;
