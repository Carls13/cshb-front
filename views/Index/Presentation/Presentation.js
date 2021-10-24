import { useRouter } from 'next/router';
import { Button, Paragraph } from '../../Contact/styles';
import {
    Container,
    Title,
    Description,
    Row,
    Column,
    Image,
} from './styles';

export const Presentation = () => {
    const router = useRouter();

    return (
        <Container>
            <Title>¡Bienvenido!</Title>
            <Description>Este es el sitio web personal de Carlos Hernández, Desarrollador Web con
                3+ años de experiencia residenciado en Valencia, Venezuela. Quédate para que puedas
                conocerme un poco más, leerme y ver mi trabajo😁</Description>
            <Row>
                <Column>
                    <Image src="/carlos-home.jpg" alt="Carlos Hernández" title="Carlos Hernández" />
                </Column>
                <Column>
                    <Paragraph>
                        Soy Desarrollador Web, actualmente trabajo en la empresa ValidatedID🖋📱
                    </Paragraph>
                    <Paragraph>
                        Desarrollo productos digitales utilizando tecnologías modernas como React, Next, Node, Express y Python💻
                    </Paragraph>
                    <Paragraph>
                        Llevo +3 años de experiencia, trabajando tanto de manera freelance como para empresas. También he dado asesorías y tutorías🤓
                    </Paragraph>
                    <Paragraph>
                        Gran parte de mi formación se la debo a la educación en línea, principalmente de plataformas como Platzi y Zero to Mastery📚
                    </Paragraph>
                    <Paragraph>
                        Fiel creyente de que cada uno de nosotros tiene el poder de cambiar su situación y su destino, mediante el esfuerzo y la educación✌
                    </Paragraph>
                    <Paragraph>
                        Ah... Y también estudio Ingeniería de Telecomunicaciones📡
                    </Paragraph>
                </Column>
            </Row>
            <Description>Conóceme un poco más</Description>
            <Button onClick={() => router.push('/about').then(() => window.scrollTo(0, 0))}>Acerca de mí</Button>
        </Container>
    );
};