import { MyHead as Head } from "../../components/Head/Head";
import { PortfolioDetailView } from "../../views/PortfolioDetail/PortfolioDetail";

export async function getServerSideProps(context) {
    const { slug } = context?.params;
    // Remove accents
    const normalizedSlug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    // Fetch data from external API
    const res = await fetch(`https://carlosshb-api.vercel.app/portfolio/${normalizedSlug}`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { item: data.body } };
};

export default function Portfolio(props) {
    return (
        <>
            <Head title={`${props?.item?.title}`} />
            <PortfolioDetailView item={props.item} />
        </>
    );
};
