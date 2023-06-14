import React from "react";
import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  Image,
  Link,
  Grid,
  GridItem,
  Center,
  Flex,
} from "@chakra-ui/react";


import SocialMediaButtons from "../components/SocialMediaButtons";
import Product from "../components/Product";
export default function HomePage() {
  const initialSiteState = {
    author: ``,
    pageTitle: ``,
    url: ``,
    image: ``,
    imageAlt: ``,
    description: ``,
    name: ``,
    keywords: `xx`,
    publisher: ``,
  };

  const [site, setSite] = React.useState(initialSiteState);
  React.useEffect(() => {
    setSite({
      author: `ilyas Bozdemir,bozdemir.ib70@gmail.com`,
      pageTitle: `Anasayfa | esilamoda.com`,
      url: `fullUrl`,
      baseUrl: `baseUrl`,
      image: ``,
      imageAlt: `site-logo-png`,
      description: ``,
      name: ``,
      keywords: ``,
      publisher: ``,
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="canonical" href={site.url} />
        <base href={site.baseUrl} />
        <title>{site.pageTitle}</title>
        <meta itemprop="name" content={site.pageTitle} />
        <meta itemprop="description" content={site.description} />
        <meta name="description" content={site.description} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="1 day" />
        <meta
          name="author"
          content={site.author || `ilyas Bozdemir,bozdemir.ib70@gmail.com`}
        />
        <meta name="publisher" content={site.publisher || `ilyas Bozdemir`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={site.pageTitle} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:site" content="@Ilyasbzdmr70" />
        <meta name="og:title" content={site.pageTitle} />
        <meta name="og:description" content={site.description} />
        <meta name="og:type" content="website" />
      </Head>
      <>
        <Center>
          <Link href={`/?ref=home-page-navbar`} passHref>
            <Image src="images/logo.png" draggable={false} />
          </Link>
        </Center>

        <Heading as="h1" textAlign="center" fontWeight="semibold">
          Sitemiz yapım aşamasında
        </Heading>
        <Text textAlign="center" mt={4}>
          Yine de ürünlere göz atabilirsiniz.
        </Text>

        <Box p={4}>
          <Product />
        </Box>

        <>
          <Flex as={Center} direction={"column"}>
            <SocialMediaButtons />
            <>© 2023 Esila Moda. Tüm Hakları Saklıdır.</>
          </Flex>
        </>
      </>
    </>
  );
}
