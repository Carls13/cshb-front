import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { GoBack } from "../../components/GoBack/GoBack";
import { Description } from "../Index/Presentation/styles";
import {
    Container,
    Title,
    ArticleContainer
} from "./styles";

export const ArticleView = ({ article }) => {
    const { title, content, createdAt } = article;
    return (
        <Container>
            <Title>{title}</Title>
            <Description>
                <Moment locale="es" date={createdAt} fromNow />
            </Description>
            <ArticleContainer>
                <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
            </ArticleContainer>
            <GoBack />
        </Container>
    );
};