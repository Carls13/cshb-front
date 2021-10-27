import { Layout } from "../components/Layout/Layout";
import { Spinner } from "../components/Spinner/Spinner";
import { useRouterLoading } from "../hooks/useRouterLoading";

function MyApp({ Component, pageProps }) {
    const loadingPage = useRouterLoading();
    return (
        <Layout>
            {loadingPage ? <Spinner/> : <Component {...pageProps} />}
        </Layout>
    );
};

export default MyApp;
