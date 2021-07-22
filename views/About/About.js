import { Paragraph } from "../Contact/styles";
import { Description, Row } from "../Index/Presentation/styles";
import {
    Container,
    Title,
    Column,
    Image,
} from "./styles.js";

export const AboutView = () => {
    return (
        <Container>
            <Title>Carlos Samuel Hernández</Title>
            <Description>
                No sé qué ponerrrrrr😭😭
            </Description>

            <Row>
                <Column>
                    <Paragraph>
                        ¿De verdad te irás sin contactarme?
                    </Paragraph>
                </Column> 
                <Column>
                    <Image src="/really.jpg" alt="Carlos Hernández" />
                </Column>
            </Row>

        </Container>
    );
};