import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 15px;
    border-radius: 8px;
    box-shadow: 1px 2px 10px 5px rgba(0, 0, 0, 0.4);
    background-color: #ffffff22;
    margin: 15px 0;
    gap: 50px;

    &:hover {
        background-color: #ffffff44;
    }

    @media (max-width: 800px) {
        gap: 30px;
        display: flex;
        flex-direction: column;
    }
`;

export const Image = styled.img`
    width: 20%;
    display: block;
    margin: 0 auto 20px auto;

    @media (max-width: 800px) {
        width: 80%;
    }
`;

export const TextContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 15px;

    @media (max-width: 800px) {
        width: 100%;
        text-align: center;
    }
`;

export const Title = styled.h3`
    color: white;
    font-size: 35px;
    font-weight: bold;
    text-align: left;

    @media (max-width: 800px) {
        text-align: center;
    }
`;

export const Summary = styled.p`
    width: 100%;
    color: white;
    font-size: 18px;
    text-align: left;
    margin: 0;

    @media (max-width: 800px) {
        text-align: center;
    }
`;

export const ReadMore = styled.span`
    cursor: pointer;
    color: white;
    font-size: 25px;
    font-weight: bold;
    text-align: left;

    @media (max-width: 800px) {
        text-align: center;
    }
`;