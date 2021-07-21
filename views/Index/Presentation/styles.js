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
`;

export const Row = styled.div`
    ${rowContainer};
`;

export const Column = styled.div`
    ${columnContainer};
`;

export const Image = styled.img`
    display: block;
    width: 60%;
    margin: auto;
    border-radius: 10px; 
`;
