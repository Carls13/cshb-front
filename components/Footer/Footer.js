import { CustomLink } from "../CustomLink/CustomLink";

import {
    FooterContainer,
    LogoContainer,
    Logo,
    LinksContainer,
    SocialMediaContainer,
    SocialMedia,
    Copyright
} from './styles';

export const Footer = () => {
    return (
        <FooterContainer>
            <LogoContainer>
                <Logo src="/logo-white.png" alt="Carlos Hernández logo" />
                <span>Carlos Hernández</span>
                <span>Desarrollador Web</span>
            </LogoContainer>
            <LinksContainer>
                <CustomLink route="/">Inicio</CustomLink>
                <CustomLink route="/about">Conóceme</CustomLink>
                <CustomLink route="/portfolio">Portafolio</CustomLink>
                <CustomLink route="/blog">Blog</CustomLink>
                <CustomLink route="/contact">Contacto</CustomLink>
            </LinksContainer>
            <SocialMediaContainer>
                <SocialMedia target="_blank" href="https://www.instagram.com/carlosshb98/">
                    <i className="fab fa-instagram"></i>
                </SocialMedia>
                <SocialMedia target="_blank" href="https://twitter.com/fromcarlostoyou">
                    <i className="fab fa-twitter"></i>
                </SocialMedia>
                <SocialMedia target="_blank" href="https://www.linkedin.com/in/carlos-samuel-hernandez/">
                    <i className="fab fa-linkedin"></i>
                </SocialMedia>
            </SocialMediaContainer>
            <Copyright>
                © {new Date().getFullYear()}. Carlos Hernández. Todos los derechos reservados.
            </Copyright>
        </FooterContainer>
    )
}
