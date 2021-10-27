import styled from "styled-components";
import { section, sectionTitle } from "../../../theme/commonStyles";

export const Container = styled.section`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 25px;
    row-gap: 20px;
    margin: 30px 0;

    article:nth-child(1) {
        grid-column: 1 / span 2;
        background-color: hsl(183, 100%, 36%);
    }

    article:nth-child(1) h2,
    article:nth-child(2) h2,
    article:nth-child(4) h2 {
        color: rgba(255, 255, 255, 1);
    }

    article:nth-child(2) {
        background-color: hsl(34, 41%, 61%);
    }
      
    article:nth-child(3) {
        grid-row: 2;
        color: white;
        background-color: #6c63ff;
    }
      
    article:nth-child(4) {
        grid-row: 2;
        grid-column: 2 / span 2;
        background-color: hsl(198, 45%, 29%);
    }
    
    article:nth-child(5) {
        grid-column: 4;
        grid-row: 1 / span 2;
        color: white;
        background-color: #6c63ff;
    }
    
    article:nth-child(1),
    article:nth-child(2),
    article:nth-child(4) {
        color: white;
    }

    @media screen and (max-width: 832px) {
        display: flex;
        flex-direction: column;
      
        div:nth-child(1) {
          background-position: calc(100% - 30px) 0;
        }
    }
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.4);
    cursor: pointer;
`;

export const ArticleTitle = styled.h2`
    margin-bottom: 10px;
`;

export const ArticleText = styled.p`
    font-weight: bold;
    text-align: justify;
    line-height: 20px;
`;