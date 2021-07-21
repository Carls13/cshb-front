import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: auto;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.65);
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
    gap: 20px;
    width: auto;
`;

export const Option = styled.span`
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 18px;
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
`;