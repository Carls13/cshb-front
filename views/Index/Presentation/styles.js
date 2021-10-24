import styled from "styled-components";
import { columnContainer, pageDescription, rowContainer, section, sectionTitle } from "../../../theme/commonStyles";

export const Container = styled.div`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const Description = styled.p`
    ${pageDescription};
    width: 60%;
    margin: auto;
`;

export const Row = styled.div`
    ${rowContainer};
    margin: 15px 0;
`;

export const Column = styled.div`
    ${columnContainer};
`;

export const Image = styled.img`
    display: block;
    width: 70%;
    margin: auto;
    border-radius: 10px; 

    @media (max-width: 800px) {
        width: 100%;
    }
`;
