import styled from "styled-components";
import { columnContainer, section, sectionTitle } from "../../../theme/commonStyles";

export const Container = styled.section`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const Column = styled.div`
    ${columnContainer};
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