import {
    HeaderContainer,
    LogoContainer,
    Logo,
    OptionsContainer,
    Option,
    IconsContainer
} from './styles';

import Link from 'next/link';

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link href="/">
                    <Logo src="/logo-white.png" alt="Carlos Hernández Logo" />
                </Link>
            </LogoContainer>
            <OptionsContainer>
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
            </OptionsContainer>
            <IconsContainer>
                📸
            </IconsContainer>
        </HeaderContainer>
    )
};