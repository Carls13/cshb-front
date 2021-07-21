import { css } from "styled-components";

export const section = css`
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 40px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.65);

    @media (max-width: 800px) {
        padding: 15px 10px;
        margin: 20px 10px;
    }
`;

export const sectionTitle = css`
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 45px;
    }
`;

export const paragraph = css`
    text-align: justify;
    font-size: 18px;
    font-weight: light;
    line-height: 24px;
    color: white;
    margin: 10px 0;
`;

export const pageDescription = css`
    ${paragraph};
    width: 70%;
    margin: 0 15% 20px 15%;
    text-align: center;
`;

export const rowContainer = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const columnContainer = css`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 50%;

    @media (max-width: 800px) {
        width: 100%;
    }
`;