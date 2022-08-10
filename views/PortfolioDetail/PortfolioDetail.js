import { useRouter } from "next/router";
import { GoBack } from "../../components/GoBack/GoBack";
import { Button, ColumnTitle } from "../Contact/styles";
import {
    Container,
    Title,
    Description,
    Image,
    ButtonLink,
} from "./styles";

export const PortfolioDetailView = ({ item }) => {
    const router = useRouter();
    const { description, link, title, mobileScreenshot, desktopScreenshot } = item;

    const subjectMessage = 'Deseo mi página web';
    const message = `Me gusta mucho tu proyecto ${title}, quiero un sitio similar...`;

    let screenshot = desktopScreenshot;
    if (typeof window !== 'undefined') {
        screenshot = window.screen.width >= 800 ? desktopScreenshot : mobileScreenshot;
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Image src={screenshot} alt={title} title={title} />
            <Description>{description}</Description>
            <ButtonLink href={link} target="_blank">Visitar sitio</ButtonLink>
            <ColumnTitle>¿Te gustó este proyecto?</ColumnTitle>
            <Button 
                onClick={() => router.push(`/contact?asunto=${subjectMessage}&mensaje=${message}`).
                    then(() => window.scrollTo(0, 0))}>
                        Desarrolla uno similar</Button>
            <GoBack />
        </Container>
    );
};