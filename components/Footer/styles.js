import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: auto;
    padding: 40px;
    background-color: #ffffff11;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: white;
        text-align: center;
    }

    span:nth-child(2) {
        font-size: 24px;
    }
`;

export const Logo = styled.img`
    width: 50%;
    max-width: 550px;
    display: block;
    margin: auto;
`;

export const LinksContainer = styled.div`
    display: flex;
    gap: 10px;
    width: auto;

    @media (max-width: 800px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Option = styled.span`
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 35px;
    width: auto;
`;

export const SocialMedia = styled.a`
    cursor: pointer;

    i {
        font-size: 75px;
        color: white;
    }
`;

export const Copyright = styled.span`
    font-size: 22px;
    color: white;
    text-align: center;
`;