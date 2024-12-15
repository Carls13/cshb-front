import { useRouter } from "next/router";
import { GlobalStyles } from "../../theme/GlobalStyles";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
    const router = useRouter();
    const isEbook = router.pathname === '/ebook';

    return (
        <>
            <GlobalStyles />
            {!isEbook && <Header />}
            {children}
            {!isEbook && <Footer />}
        </>
    )
};