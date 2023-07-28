import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
export default class MyDocument extends Document {
  render() {
    const facebookiteVerification = `my5o0s5ekfspm782g4zbczwzzmi5wd`;
    const googleSiteVerification = ``;
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "http://www.esilamoda.com/"
        : "http://localhost:3000";
    return (
      <Html lang="tr">
        <Head>
          <base href={baseUrl} />
          <meta name="theme-color" content={"#fff"} />
          <meta
            name="google-site-verification"
            content={googleSiteVerification}
          />
          <meta name="facebook-domain-verification" content={facebookiteVerification} />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="p:domain_verify" content="30f5dbc27ee306cf225f4f002320e098"/>


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
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1295343311066684&ev=PageView&noscript=1"
            />
          </noscript>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W4TP4ZW');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          <noscript>
            {/* Google Tag Manager (noscript) */}
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-W4TP4ZW`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
            {/* End Google Tag Manager (noscript) */}
          </noscript>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
