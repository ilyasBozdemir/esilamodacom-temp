import Head from 'next/head';
import React from 'react';
function Meta(props) {
    const
        {
            pageTitle, description, keywords, author, publisher, url
        } = props

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta charSet="utf-8" />
            {
                /**
                 <link
                rel="alternate"
                media="only screen and (max-width: 720px)"
                href="http://m.localhost:3000">

            </link>
                 */
            }

            <link rel={"canonical"} href={'url'} />
            <base href={url} />
            <meta itemprop="name" content={pageTitle} />
            <meta itemprop="description" content={description} />
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="Turkish" />
            <meta name="revisit-after" content="1 day" />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author || `ilyas Bozdemir,bozdemir.ib70@gmail.com`} />
            <meta name="publisher" content={publisher || `ilyas Bozdemir`} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="@Ilyasbzdmr70" />

            <meta name="og:title" content={pageTitle} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content="website" />

        </Head>
    );
}

export default Meta;
