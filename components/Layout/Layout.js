import { GlobalStyles } from "../../theme/GlobalStyles";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children, isLocution }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
        </>
    )
};