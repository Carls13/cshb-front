import { MyHead as Head } from "../components/Head/Head";
import { LocutionView } from "../views/Locution/Locution";

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.carlosshb.com/locution/`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { locution: data.body } };
};

export default function Locution({ locution }) {
    console.log({ locution });

    return (
        <>
            <Head title="Locución" />
            <LocutionView locution={locution} />
        </>
    );
};