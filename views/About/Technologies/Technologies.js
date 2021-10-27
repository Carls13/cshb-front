import { Container, Title } from "../../Contact/styles"
import { Description } from "../../Index/Presentation/styles"
import { TechnologiesGrid, Technology } from "./styles";

export const Technologies = () => {
    return (
        <Container>
            <Title>Tecnologías💻</Title>
            <Description>Las herramientas que utilizo para construir productos digitales</Description>
            <TechnologiesGrid>
                <Technology src="/next.png" alt="Next.js"/>
                <Technology src="/react.png" alt="React.js"/>
                <Technology src="/node.png" alt="Node.js"/>
                <Technology src="/express.png" alt="Express.js"/>
            </TechnologiesGrid>
        </Container>
    );
}