import { useRouter } from "next/router";

import {
    Container,
    LinkText
} from './styles';

export const GoBack = () => {
    const router = useRouter();

    const handleGoBack = () => {
        if (window.history.length > 1) router.back();
        router.push('/').then(() => window.scrollTo(0, 0));
    }

    return (
        <Container>
            <LinkText onClick={handleGoBack}>👈Regresar</LinkText>
        </Container>
    );
};