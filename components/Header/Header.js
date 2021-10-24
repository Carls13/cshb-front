import {
    HeaderContainer,
    LogoContainer,
    Logo,
    OptionsContainer,
    Option,
    IconsContainer
} from './styles';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleLinkClick = () => {
        if (window.screen.width >= 800) return;

        setShowMenu(false);
    };

    useEffect(() => {
    }, [showMenu])

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href="/">
                    <Logo src="/logo-white.png" alt="Carlos Hernández Logo" />
                </Link>
            </LogoContainer>
            <OptionsContainer onClick={handleLinkClick} showMenu={showMenu}>
                <Option>
                    <Link prefetch href="/">Inicio</Link>
                </Option>
                <Option>
                    <Link prefetch href="/about">Conóceme</Link>
                </Option>
                <Option>
                    <Link prefetch href="/portfolio">Portafolio</Link>
                </Option>
                <Option>
                    <Link prefetch href="/blog">Blog</Link>
                </Option>
                <Option>
                    <Link prefetch href="/contact">Contacto</Link>
                </Option>
            </OptionsContainer>
            <IconsContainer>
                <img src="/burger-menu.svg" alt="" onClick={() => setShowMenu(!showMenu)}/>
            </IconsContainer>
        </HeaderContainer>
    )
};