import Head from 'next/head';

export const MyHead = ({ title, description, image }) => {
    const metaDescription = description || "Sitio personal de Carlos Hernández, Desarrollador Web.";
    const metaTitle = `${title} | Carlos Hernández`;
    const metaImage = image || "/carlos-home.jpg";
    
    return (
        <Head>
            <title>{metaTitle}</title>
            <html lang="es"/>
            <link rel="icon" href="/logo-white.png" />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:url" content="carlosshb.com" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_ES" />
            <meta name="description" content={metaDescription}/>

            <meta name="twitter:card" content="sitio"/>
            <meta name="twitter:site" content="@fromcarlostoyou"/>
            <meta name="twitter:title" content={metaTitle}/>
            <meta name="twitter:description" content={metaDescription}/> 
            <meta name="twitter:creator" content="@fromcarlostoyou"/>
            <meta name="twitter:image" content={metaImage}/>
            <meta name="twitter:data1" content="carlosshb.com"/> 
            <meta name="twitter:label1" content="Fuente"/>
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