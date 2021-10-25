import styled from "styled-components";

export const Card = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 30px 15px;
    border-radius: 8px;
    box-shadow: 1px 2px 10px 5px rgba(0, 0, 0, 0.4);
    background-color: #ffffff22;

    &:hover {
        background-color: #ffffff44;
    }
`;

export const Image = styled.img`
    width: 80%;
    display: block;
    margin: 0 auto 20px auto;
`;

export const Title = styled.h4`
    color: white;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Description = styled.p`
    width: 80%;
    color: white;
    font-size: 18px;
    text-align: center;
    font-weight: lighter;
    margin: 0 10% 10px 10%; 
`;

export const PortfolioLink = styled.a`
    color: white;
    font-size: 25px;
    font-weight: bold;
`;