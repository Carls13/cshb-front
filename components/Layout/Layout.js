import { GlobalStyles } from "../../theme/GlobalStyles";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
        </>
    )
};