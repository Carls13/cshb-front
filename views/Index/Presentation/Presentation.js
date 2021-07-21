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
                        Todo comenzó hace {new Date().getFullYear() - 2016} años, cuando vi en la Universidad
                    la materia <b>Computación I</b>. Ahí fue mi primer contacto con la programación. Me
                    gustaba resolver todo tipo de problemas planteados a través del código (en ese entonces
                    veíamos Visual Basic💀).
                    </Paragraph>
                    <Paragraph>
                        A partir de allí, empecé a profundizar un poco más de lo que ví en la Universidad.
                        Comencé a ver algunos videos en Youtube acerca de algoritmos en general, luego de los
                        cuales seguí experimentando con problemas ficticios y reales que encontraba en mi día a día.
                    </Paragraph>
                    <Paragraph>
                        Pasé un buen tiempo saltando de un lenguaje de programación a otro, sin saber realmente a qué
                        rama me quería dedicar😱😱. Hasta que, a raíz de ser contratado por una pequeña empresa, me vi forzado
                        a aprender <b>Desarrollo Web</b>, tanto Backend como Frontend. Allí me di cuenta que me gustaba tanto
                        interactuar con las base de datos, como crear productos interactivos con los usuarios.
                    </Paragraph>
                    <Paragraph>
                        Desde ese entonces, me he dedicado a construir sitios webs💻 y estoy en miras de desarrollar aplicaciones móviles📱.
                    </Paragraph>
                </Column>
            </Row>
            <Description>Conóceme un poco más</Description>
            <Button onClick={() => router.push('/about').then(() => window.scrollTo(0, 0))}>Acerca de mí</Button>
        </Container>
    );
};