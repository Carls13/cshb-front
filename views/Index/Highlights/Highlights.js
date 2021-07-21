import { PortfolioItem } from "../../../components/PortfolioItem/PortfolioItem";
import { Button } from "../../Contact/styles";
import {
    Container,
    Title,
    Description,
    PortfolioGrid
} from "./styles";

import { useRouter } from 'next/router';

export const Highlights = ({ highlights }) => {
    const router = useRouter();

    return (
        <Container>
            <Title>Proyectos Destacados</Title>
            <Description>Estos son los mejores proyectos que he hecho hasta la fecha. Haz click en
                cada item para poder ver con más detalle cada uno de ellos🧐</Description>
            <PortfolioGrid>
                {
                    highlights.map((highlightItem, i) => {
                        return <PortfolioItem portfolioItem={highlightItem} key={i} />
                    })
                }
            </PortfolioGrid>
            <Description>Puedes ver más de mi trabajo aquí👇</Description>
            <Button onClick={() => router.push('/portfolio').then(() => window.scrollTo(0, 0))}>Ver todos</Button>
        </Container>
    );
};