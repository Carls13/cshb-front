import { useRouter } from 'next/router';
import { Button } from '../../Contact/styles';
import {
    Container,
    Title,
    Description,
    Image,
} from './styles';

export const CallToAction = () => {
    const router = useRouter();

    return (
        <Container>
            <Title>¿Decidido?</Title>
            <Image src="/contact.svg" alt="Contacto" title="Contacto" />
            <Description>Es hora de que inicies el desarrollo de tu proyecto deseado.
                ¡Escríbeme e iniciemos lo más pronto posible!</Description>
            <Button onClick={() => router.push('/contact?asunto=Deseo mi página web').
                then(() => window.scrollTo(0, 0))}>Contáctame</Button>
        </Container>
    );
};