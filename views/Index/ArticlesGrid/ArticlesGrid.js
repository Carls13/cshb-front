import { useRouter } from 'next/router';
import { paragraph } from '../../../theme/commonStyles';
import { Button } from '../../Contact/styles';
import { Description } from '../Presentation/styles';
import {
    Container,
    Title,
    GridContainer,
    Article,
    ArticleTitle,
    ArticleText
} from './styles';

export const ArticlesGrid = ({ articles }) => {
    const router = useRouter();

    const handleItemClick = (title) => {
        const slug = title.replace(/ /gi, "-").toLowerCase();

        router.push("/article/" + slug).then(() => window.scrollTo(0, 0));
    };

    const getFirst2Paragraphs = (content) => {
        const paragraphs = content.split(".");

        return (
            <>
                {paragraphs[0]}.
                <br />
                <br />
                {paragraphs[1]}.
            </>
        );
    }

    return (
        <Container>
            <Title>Últimos artículos📰</Title>
            <Description>
                Estos son los últimos artículos de mi blog. Haz click en cada uno para leerlos completamente.
            </Description>
            <GridContainer>
                {
                    articles.map((article, i) => {
                        const { content, title } = article;
                        return (
                            <Article key={i} onClick={() => handleItemClick(title)}>
                                <ArticleTitle>{title}</ArticleTitle>
                                <ArticleText>
                                    {getFirst2Paragraphs(content)}
                                </ArticleText>
                            </Article>
                        );
                    })
                }
            </GridContainer>
            <Description>¿Te gustaría incluir tu propio artículo?</Description>
            <Button onClick={() => router.push('/contact?asunto=Quiero escribir un artículo').then(() => window.scrollTo(0, 0))}>Hazlo ya</Button>
        </Container>
    );
};