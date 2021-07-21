import { Description } from "../Index/Presentation/styles";
import { ArticleSummary } from "./ArticleSummary/ArticleSummary";
import {
    Container,
    Title,
} from "./styles.js";

export const BlogView = ({ blog }) => {
    return (
        <Container>
            <Title>Blog📝</Title>
            <Description>
                Este es el espacio en el cual expreso mis mejores ideas y detallo mis proyectos más ambiciosos. Te invito a leerme😁
            </Description>
            {
                blog.map((article, i) => {
                    return <ArticleSummary key={i} article={article} />;
                })
            }
        </Container>
    );
};