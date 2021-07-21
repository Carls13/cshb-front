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
                    <Link prefetch href="/">Inicio</Link>
                </Option>
                <Option>Conóceme</Option>
                <Option>
                    <Link prefetch href="/portfolio">Portafolio</Link>
                </Option>
                <Option>
                    <Link prefetch href="/blog">Blog</Link>
                </Option>
                <Option>
                    <Link prefetch href="/contact">Contacto</Link>
                </Option>
            </LinksContainer>
            <SocialMediaContainer>
                <SocialMedia>
                    <i className="fab fa-instagram"></i>
                </SocialMedia>
                <SocialMedia>
                    <i className="fab fa-twitter"></i>
                </SocialMedia>
                <SocialMedia>
                    <i className="fab fa-linkedin"></i>
                </SocialMedia>
            </SocialMediaContainer>
            <Copyright>
                © {new Date().getFullYear()}. Carlos Hernández. All rights reserved.
                </Copyright>
        </FooterContainer>
    )
}