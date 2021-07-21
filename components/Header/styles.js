import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: auto;
    padding: 10px 40px;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const LogoContainer = styled.div`
    width: auto;
`;

export const Logo = styled.img`
    width: auto;
    height: 80px;
    cursor: pointer;
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: 20px;
    width: auto;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const Option = styled.span`
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 22px;
    padding: 5px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }
`;

export const IconsContainer = styled.div`
    display: none;
    width: auto;

    @media (max-width: 800px) {
        display: flex;
    }
`;