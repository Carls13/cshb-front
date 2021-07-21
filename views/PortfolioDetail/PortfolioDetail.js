import { GoBack } from "../../components/GoBack/GoBack";
import {
    Container,
    Title,
    Description,
    Image,
    ButtonLink,
} from "./styles";

export const PortfolioDetailView = ({ item }) => {
    const { description, link, title, mobileScreenshot, desktopScreenshot } = item;

    return (
        <Container>
            <Title>{title}</Title>
            <Image src={window.screen.width >= 800 ? desktopScreenshot : mobileScreenshot} alt={title} title={title} />
            <Description>{description}</Description>
            <ButtonLink href={link} target="_blank">Visitar sitio</ButtonLink>
            <GoBack />
        </Container>
    );
};