import { MyHead as Head } from "../../components/Head/Head";
import { ArticleView } from "../../views/Article/Article";

export async function getServerSideProps(context) {
    const { slug } = context?.params;
    // Remove accents
    const normalizedSlug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // Fetch data from external API
    const res = await fetch(`https://api.carlosshb.com/blog/${normalizedSlug}/`);
    const article = await res.json();

    // Pass data to the page via props
    return { props: { article: article.body } };
};

export default function Portfolio(props) {
    const { article } = props;
    const { content, title } = article;
    return (
        <>
            <Head title={title} description={content.split('')[0]} />
            <ArticleView article={props?.article} />
        </>
    );
};
