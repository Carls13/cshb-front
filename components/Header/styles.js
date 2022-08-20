import styled, { keyframes } from 'styled-components';

const appearingMenu = keyframes`
    from {
        left: -150vw;
    }

    to {
        left: 2.5vw;
    }
`;

export const HeaderContainer = styled.header`
    height: auto;
    padding: 10px 40px;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        padding: 10px;
    }
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
        display: ${props => props.showMenu ? 'flex' : 'none'};
        position: absolute;
        top: 0;
        left: 2.5vw;
        animation-name: ${appearingMenu};
        animation-duration: 0.5s;
        bottom: 0;
        width: 100vw;
        margin: 0;
        height: 100vh;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
        background-color: #000000cc;
        margin-left: -10px;
        overflow-y: hidden;
    }
`;

export const Option = styled.span`
`;

export const IconsContainer = styled.div`
    display: none;
    width: auto;

    @media (max-width: 800px) {
        display: flex;

        img {
            z-index: 10;
        }
    }
`;

export const CodementorLink = styled.a`
`;