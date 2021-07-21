import { Index } from "../views/Index/Index";
import { MyHead as Head } from "../components/Head/Head";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://carlosshb-api.vercel.app/portfolio/highlights`);
    const highlights = await res.json();

    const blogRes = await fetch(`https://carlosshb-api.vercel.app/blog/`);
    const blog = await blogRes.json();

    // Pass data to the page via props
    return {
        props: {
            highlights: highlights.body,
            blog: blog.body
        }
    };
};

export default function Home(props) {
    return (
        <>
            <Head title="Inicio" />
            <Index highlights={props.highlights}
                blog={props.blog}
            />
        </>
    );
};
