import {
    HeaderContainer,
    LogoContainer,
    Logo,
    OptionsContainer,
    IconsContainer
} from './styles';

import { useState } from 'react';

import Link from 'next/link';

import { CustomLink } from '../CustomLink/CustomLink';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleLinkClick = () => {
        if (window.screen.width >= 800) return;

        setShowMenu(false);
    };

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href="/">
                    <Logo src="/logo-white.png" alt="Carlos Hernández Logo" />
                </Link>
            </LogoContainer>
            <OptionsContainer onClick={handleLinkClick} showMenu={showMenu}>
                <CustomLink route="/">Inicio</CustomLink>
                <CustomLink route="/about">Conóceme</CustomLink>
                <CustomLink route="/portfolio">Portafolio</CustomLink>
                <CustomLink route="/blog">Blog</CustomLink>
                <CustomLink route="/contact">Contacto</CustomLink>
            </OptionsContainer>
            <IconsContainer>
                <img src="/burger-menu.svg" alt="" onClick={() => setShowMenu(!showMenu)} />
            </IconsContainer>
        </HeaderContainer>
    )
};