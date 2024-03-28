import styled from "styled-components";

export const LocutionItemContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
    border-radius: 8px;
    box-shadow: 1px 2px 10px 5px rgba(0, 0, 0, 0.4);
    background-color: #ffffff22;
    width: 100%;

    audio {
        display: block;
        margin: 5px auto;
    }
`;

export const LocutionTitle = styled.h4`
    color: white;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
`;

export const LocutionDescription = styled.p`
    width: 80%;
    color: white;
    font-size: 18px;
    text-align: center;
    font-weight: light;
    margin: 0 10% 10px 10%; 
`;

export const TypeTag = styled.p`
    color: black;
   
    width: auto;

    span {
        background-color: white;
        border-radius: 16px;
        padding: 4px;
        font-weight: bold;
    }
`;