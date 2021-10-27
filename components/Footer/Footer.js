import Link from "next/link";

import {
    FooterContainer,
    LogoContainer,
    Logo,
    LinksContainer,
    Option,
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
                <Option>
                    <Link href="/">Inicio</Link>
                </Option>
                <Option>Conóceme</Option>
                <Option>
                    <Link href="/portfolio">Portafolio</Link>
                </Option>
                <Option>
                    <Link href="/blog">Blog</Link>
                </Option>
                <Option>
                    <Link href="/contact">Contacto</Link>
                </Option>
            </LinksContainer>
            <SocialMediaContainer>
                <SocialMedia target="_blank" href="https://www.instagram.com/carlosshb98/">
                    <i className="fab fa-instagram"></i>
                </SocialMedia>
                <SocialMedia target="_blank" href="https://twitter.com/fromcarlostoyou">
                    <i className="fab fa-twitter"></i>
                </SocialMedia>
                <SocialMedia target="_blank" href="https://www.linkedin.com/in/fromcarlostoyou">
                    <i className="fab fa-linkedin"></i>
                </SocialMedia>
            </SocialMediaContainer>
            <Copyright>
                © {new Date().getFullYear()}. Carlos Hernández. Todos los derechos reservados.
            </Copyright>
        </FooterContainer>
    )
}