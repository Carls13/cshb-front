import styled from "styled-components";
import { columnContainer, paragraph, rowContainer, section, sectionTitle } from "../../theme/commonStyles";

export const Container = styled.section`
    ${section};
`;

export const Title = styled.h1`
    ${sectionTitle};
`;

export const Row = styled.div`
    ${rowContainer};
`;

export const Column = styled.div`
    ${columnContainer};
`;

export const ColumnTitle = styled.h3`
    text-align: center;
    font-size: 28px;
    font-weight: normal;
    color: white;
`;

export const Image = styled.img`
    width: 60%;
    display: block;
    margin: 20px auto;
`;

export const Paragraph = styled.p`
    ${paragraph};
    width: 80%;
    font-size: 24px;
    margin: 10px auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`
    text-align: left;
    font-size: 20px;
    font-weight: normal;
    color: white;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid black;
    padding: 15px;
    height: 40px;
    text-align: left;
    border-radius: 8px;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: normal;
    box-shadow: 2px 1px 20px 5px rgba(0, 0, 0, 0.4);

    &::placeholder {
        color: gray;
        font-size: 20px;
        font-weight: bold;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid black;
    padding: 15px;
    height: 150px;
    resize: none;
    text-align: left;
    border-radius: 8px;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: normal;
    box-shadow: 2px 1px 1px 10px rgba(0, 0, 0, 0.4);

     &::placeholder {
        color: gray;
        font-size: 20px;
        font-weight: bold;
    }
`;

export const ErrorSpan = styled.span`
    color: red;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Button = styled.button`
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