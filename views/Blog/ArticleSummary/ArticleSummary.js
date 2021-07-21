import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import {
    Container,
    Image,
    TextContainer,
    Title,
    Summary,
    ReadMore
} from "./styles";

export const ArticleSummary = ({ article }) => {
    const { content, title } = article;

    const router = useRouter();

    const handleItemClick = () => {
        const slug = title.replace(/ /gi, "-").toLowerCase();

        router.push("/article/" + slug).then(() => window.scrollTo(0, 0));
    };

    return (
        <Container>
            <Image src="/desktop.svg" alt={title} title={title} />
            <TextContainer>
                <Title>{title}</Title>
                <Summary>
                    <ReactMarkdown>
                        {content.split(".")[0] + "..."}
                    </ReactMarkdown>
                </Summary>
                <ReadMore onClick={handleItemClick}>Leer más</ReadMore>
            </TextContainer>
        </Container>
    );
};