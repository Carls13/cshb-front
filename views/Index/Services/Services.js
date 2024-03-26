import { ColumnTitle, Paragraph } from '../../Contact/styles';
import {
    Container,
    Title,
    Description,
    Row,
    Column,
    Image,
    ServicesGrid,
} from './styles';

export const Services = () => {
    return (
        <Container>
            <Title>Desarrolla tu idea conmigo</Title>
            <Description>Hoy en día, los sitios web cuentan con ciertas características que les permitirán
                resaltar frente a competidores y crecer. ¿Cuáles son esas características?
            </Description>
            {/* <ServicesGrid> */}
            <Row>
                <Column>
                    <Image src="/website.svg" alt="Diseños modernos" title="Diseños modernos" />
                </Column>
                <Column>
                    <ColumnTitle>Diseños frescos y modernos😎</ColumnTitle>
                    <Paragraph>
                        Basta de esos sitios con anuncios y banners por todos lados. Dile que no
                        a aquellas plataformas saturadas de mucho contenido en pocos espacios. Elige un
                        diseño interactivo con el usuario, con animaciones, bordes circulares, efectos de sombra,
                        imágenes con tamaños adecuados, etc.
                    </Paragraph>
                </Column>
            </Row>
            <Row mobileReverse>
                <Column>
                    <ColumnTitle>Diseño responsivo📱</ColumnTitle>
                    <Paragraph>
                        Tu sitio web no solo debe funcionar correctamente en la versión de escritorio, sino en todos los
                        dispositivos. Asegúrate de exigir la mejor funcionalidad posible para tu plataforma en el celular.
                    </Paragraph>
                </Column>
                <Column>
                    <Image src="/mobile.svg" alt="Diseños responsivos" title="Diseños responsivos" />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Image src="/time.svg" alt="Funcionalidad perdurable con el tiempo" title="Funcionalidad perdurable con el tiempo" />
                </Column>
                <Column>
                    <ColumnTitle>Funcionalidad perdurable con el tiempo⌛</ColumnTitle>
                    <Paragraph>
                        ¿Creaste un sitio web en el pasado y a los meses ya estaba caído? Elige a alguien que te garantice
                        que tu proyecto perdure la mayor cantidad de tiempo posible, que te ofrezca actualizaciones y mantenimiento y que se encargue de renovar tus servicios de hosting y dominio.
                    </Paragraph>
                </Column>
            </Row>
            <Row mobileReverse>
                <Column>
                    <ColumnTitle>Optimización para motores de búsqueda🔎</ColumnTitle>
                    <Paragraph>
                        Al tener un emprendimiento, lo más deseable es aparecer de primero en los resultados
                        de búsquedas en Google. Es por ello que se deben aplicar todas las técnicas de SEO necesarias
                        para disparar tu sitio web en este particular.
                    </Paragraph>
                </Column>
                <Column>
                    <Image src="/seo.svg" alt="Optimización para motores de búsqueda" title="Optimización para motores de búsqueda" />
                </Column>
            </Row>
            {/* </ServicesGrid> */}
        </Container>
    );
};