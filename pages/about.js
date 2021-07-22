import { AboutView } from "../views/About/About";
import { MyHead as Head } from "../components/Head/Head";

export default function About() {
    return (
        <>
            <Head title="Acerca de mí" />
            <AboutView />
        </>
    );
};
