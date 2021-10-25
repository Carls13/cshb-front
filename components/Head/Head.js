import Head from 'next/head';

export const MyHead = ({ title }) => {
    return (
        <Head>
            <title>Carlos Hernández | {title}</title>
            <link rel="icon" href="/logo-white.png" />
            <meta property="og:title" content="Carlos Hernández" />
            <meta property="og:url" content="carlosshb.com" />
            <meta property="og:description" content="Sitio personal de Carlos Hernández, Desarrollador Web." />
            <meta property="og:image" content="/logo-black.png" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156750484-1"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
                 window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-156750484-1');
            `    }}
            />
        </Head>
    )
};