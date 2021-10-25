import styled from "styled-components";
import { section, sectionTitle } from "../../theme/commonStyles";

export const Container = styled.section`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const ArticleContainer = styled.div`
    color: white;
    padding: 0 7.5%; 

    p {
        font-size: 18px;
        text-align: justify;
    }

    img {
        width: 100%;
        display: block;
        margin: 10px auto;
    }

    a {
        color: hsl(187.32824427480918, 74.85714285714285%, 54.31372549019608%);
    }
`;