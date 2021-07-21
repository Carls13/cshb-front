import { BlogView } from "../views/Blog/Blog";
import { MyHead as Head } from "../components/Head/Head";

export async function getServerSideProps() {
    // Fetch data from external API
    const blogRes = await fetch(`https://carlosshb-api.vercel.app/blog/`);
    const blog = await blogRes.json();

    console.log(blog);

    // Pass data to the page via props
    return {
        props: {
            blog: blog.body
        }
    };
};

export default function Blog(props) {
    return (
        <>
            <Head title="Blog" />
            <BlogView blog={props?.blog} />
        </>
    );
};
