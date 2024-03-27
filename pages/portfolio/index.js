import { PortfolioView } from "../../views/Portfolio/Portfolio";
import { MyHead as Head } from "../../components/Head/Head";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.carlosshb.com/portfolio/`);
    fetch(`https://audiophile-backend-alx9.onrender.com/products`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { portfolio: data.body } };
};

export default function Portfolio(props) {
    return (
        <>
            <Head title="Portafolio" />
            <PortfolioView portfolio={props.portfolio} />
        </>
    );
};
