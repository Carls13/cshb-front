import Head from 'next/head';

export const MyHead = ({ title }) => {
    return (
        <Head>
            <title>Carlos Hernández | {title}</title>
            <link rel="icon" href="/logo-white.png" />
            <meta property="og:title" content="Carlos Hernández" />
            <meta property="og:url" content="carlosshb.com" />
            <meta property="og:description" content="Página web de Carlos Hernández, desarrollador web." />
            <meta property="og:image" content="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
            />
        </Head>
    )
};