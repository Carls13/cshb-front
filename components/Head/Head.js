import Head from 'next/head';

export const MyHead = ({ title, description }) => {
    const metaDescription = description || "Sitio personal de Carlos Hernández, Desarrollador Web.";
    const metaTitle = `${title} | Carlos Hernández`;
    return (
        <Head>
            <title>{metaTitle}</title>
            <html lang="es"/>
            <link rel="icon" href="/logo-white.png" />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:url" content="carlosshb.com" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content="/logo-black.png" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <meta name="description" content={metaDescription}/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link defer href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            <link
                defer
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