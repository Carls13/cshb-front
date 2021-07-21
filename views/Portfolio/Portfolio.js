import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import {
    Container,
    Title,
    Description,
    PortfolioGrid
} from "./styles";

export const PortfolioView = ({ portfolio }) => {
    return (
        <Container>
            <Title>Mi Portafolio</Title>
            <Description>Aquí puedes ver tanto mis proyectos personales como trabajos anteriores,
            así podrás darte una idea del tipo de productos que he desarrollado. Haz click en
            cada item para poder ver con más detalle cada uno de ellos🧐</Description>
            <PortfolioGrid>
                {
                    portfolio.map((portfolioItem, i) => {
                        return <PortfolioItem portfolioItem={portfolioItem} key={i} />
                    })
                }
            </PortfolioGrid>
        </Container>
    );
};