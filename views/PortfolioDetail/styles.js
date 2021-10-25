import styled from "styled-components";
import { pageDescription, section, sectionTitle } from "../../theme/commonStyles";

export const Container = styled.section`
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
`;

export const Image = styled.img`
    width: 100%;
    margin: 10px 0;
    border-radius: 10px;
`;

export const ButtonLink = styled.a`
    display: block;
    margin: 15px auto;
    width: auto;
    padding: 10px 20px;
    background-color: #168999;
    border: white;
    color: white;
    border-radius: 6px;
    box-shadow: 2px 1px 20px 5px rgba(0, 0, 0, 0.4);
    font-size: 20px;
    font-weight: bold;
`;