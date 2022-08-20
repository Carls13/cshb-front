import {
    HeaderContainer,
    LogoContainer,
    Logo,
    OptionsContainer,
    IconsContainer,
    CodementorLink
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
        <>
            <HeaderContainer>
                <LogoContainer>
                    <Link href="/">
                        <Logo src="/logo-white.png" alt="Carlos Hernández Logo" />
                    </Link>
                    <CodementorLink href="https://www.codementor.io/@carls13?refer=badge" target="_blank"> 
                <img src="https://www.codementor.io/m-badges/carls13/find-me-on-cm-g.svg" alt="Codementor badge" />
            </CodementorLink>
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
            
        </>
        
    )
};