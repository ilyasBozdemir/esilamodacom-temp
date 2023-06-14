import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../src/theme'
import { ColorModeScript } from '@chakra-ui/react'
export default class MyDocument extends Document {
  render() {
    const googleSiteVerification = ``
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://myproductionurl.com'
        : 'http://localhost:3000'
    return (
      <Html lang="tr">
        <Head>
          <base href={baseUrl} />
          <meta name="theme-color" content={'#fff'} />
          <meta
            name="google-site-verification"
            content={googleSiteVerification}
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
          />
         
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-R70H50TCW4"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-R70H50TCW4');
              `,
            }}
          />

          {/* Facebook Pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1295343311066684');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1295343311066684&ev=PageView&noscript=1"
            />
          </noscript>

        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
