import { Image } from "../About/AboutPresentation/styles"
import { Paragraph } from "../Contact/styles"
import { Column, Container, Description, Row, Title } from "../Index/Presentation/styles"
import { PortfolioGrid } from "../Portfolio/styles"
import { LocutionItem } from "./LocutionItem/LocutionItem"

export const LocutionView = ({ locution }) => {
    return (
        <>
        <Container>
            <Title>Carlos Samuel Hernández</Title>
            <Description>
                Locutor
            </Description>
            <Row mobileReverse>
                <Column>
                    <Paragraph reverse>
                        Todo comenzó hace {new Date().getFullYear() - 2016} años, cuando vi en la Universidad
                        la materia <b>Computación I</b>. Ahí fue mi primer contacto con la programación. Me
                        gustaba resolver todo tipo de problemas planteados a través del código (en ese entonces
                        veíamos Visual Basic💀).
                    </Paragraph>
                    <Paragraph reverse>
                        A partir de allí, empecé a profundizar un poco más de lo que ví en la Universidad.
                        Comencé a ver algunos videos en Youtube acerca de algoritmos en general, luego de los
                        cuales seguí experimentando con problemas ficticios y reales que encontraba en mi día a día.
                    </Paragraph>
                    <Paragraph reverse>
                        Pasé un buen tiempo saltando de un lenguaje de programación a otro, sin saber realmente a qué
                        rama me quería dedicar😱😱. Hasta que, a raíz de ser contratado por una pequeña empresa, comencé a aprender <b>Desarrollo Web</b>, tanto Backend como Frontend. Allí me di cuenta que me gustaba tanto
                        interactuar con las base de datos, como crear productos interactivos para los usuarios.
                    </Paragraph>
                    <Paragraph reverse>
                        Desde ese entonces, me he dedicado a construir sitios webs💻 y estoy en miras de desarrollar aplicaciones móviles📱
                    </Paragraph>
                </Column> 
                <Column>
                    <Image className="" src="/locucion.jpg" alt="Carlos Hernández" />
                </Column>
            </Row>
        </Container>

        <Container>
            <Title>Mis creaciones</Title>
            <Description>
                Te invito a que escuches mis trabajos de locución🎙️
            </Description>
            <PortfolioGrid>
                {
                    locution.map((locutionItem, index) => {
                        return <LocutionItem locutionItem={locutionItem} key={index} />;
                    })
                }
            </PortfolioGrid>
        </Container>
        </>
        
    )
}