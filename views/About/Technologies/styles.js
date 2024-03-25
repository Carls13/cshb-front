import styled from "styled-components";

export const TechnologiesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Technology = styled.img`
    display: block;
    margin: auto;
    width: 80%;
`;