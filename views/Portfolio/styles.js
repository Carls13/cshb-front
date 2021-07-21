import styled from "styled-components";
import { pageDescription, section, sectionTitle } from "../../theme/commonStyles";

export const Container = styled.div`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const Description = styled.p`
    ${pageDescription}
`;

export const PortfolioGrid = styled.div`
    width: 90%;
    margin: 15px 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 20px;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;