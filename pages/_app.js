import { Layout } from "../components/Layout/Layout";
import { Spinner } from "../components/Spinner/Spinner";
import { useRouterLoading } from "../hooks/useRouterLoading";

function MyApp({ Component, pageProps }) {
    const isLocution = !!pageProps.locution;

    const loadingPage = useRouterLoading();
    return (
        <Layout isLocution={isLocution}>
            {loadingPage ? <Spinner/> : <Component {...pageProps} />}
        </Layout>
    );
};

export default MyApp;
