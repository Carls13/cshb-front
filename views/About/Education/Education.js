import { ColumnTitle, Container, Paragraph, Title } from "../../Contact/styles"
import { Description } from "../../Index/Presentation/styles"
import { Column, Image, Row } from "../../Index/Services/styles";

export const Education = () => {
    return (
        <Container>
            <Title>Mi Educación📚</Title>
            <Description>Aquí te cuento un poco cómo ha sido mi formación tanto tradicional como virtual</Description>
            <Row>
                <Column>
                    <Image src="/ztm.png" alt="Zero to Mastery" title="Zero to Mastery" />
                </Column>
                <Column>
                    <ColumnTitle>Zero to Mastery</ColumnTitle>
                    <Paragraph>
                        Los mejores cursos online que he hecho son de esta academia. <br />
                    </Paragraph>
                    <br />
                    <Paragraph>
                        Mis conocimientos de React, Javascript y Desarrollo Frontend en general los he obtenido aquí.
                        También he aprendido de Python y Data Science en esta plataforma. De verdad les recomiendo mucho
                        aprender aquí.
                    </Paragraph>
                </Column>
            </Row>
            <Row mobileReverse>
                <Column>
                    <ColumnTitle>Platzi</ColumnTitle>
                    <Paragraph>
                        He complementado bastante mis conocimientos en esta plataforma, principalmente en
                        Responsive Design y Next.js.
                    </Paragraph>
                    <br />
                    <Paragraph>
                        Además, he potenciado mis redes sociales y marca personal gracias a sus retos y a su gran comunidad.
                    </Paragraph>
                </Column>
                <Column>
                    <Image src="/platzi.png" alt="Platzi" title="Platzi" />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Image src="/uc.png" alt="Universidad de Carabobo" title="Universidad de Carabobo" />
                </Column>
                <Column>
                    <ColumnTitle>Universidad de Carabobo</ColumnTitle>
                    <Paragraph>
                       Mi alma mater, donde estudio la carrera de Ingeniería de Telecomunicaciones.
                    </Paragraph>
                    <br />
                    <Paragraph>
                       Allí me he formado profesionalmente, he conocido grandes personas (tanto como profesores y amigos),
                       incluso descubrí mi pasión por la progrmación.
                    </Paragraph>
                </Column>
            </Row>
        </Container>
    );
}