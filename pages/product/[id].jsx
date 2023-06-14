// pages/product/[id].js
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import SocialMediaButtons from "../../components/SocialMediaButtons";
import Link from "next/link";
import { PriceTag } from "../../components/Product/PriceTag";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { products } from "../../temp/products";

const ProductDetailPage = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMobile = /Mobi/i.test(userAgent) || /Android/i.test(userAgent);
    const isTablet =
      /iPad/i.test(userAgent) ||
      (/Tablet/i.test(userAgent) && !/Android/i.test(userAgent));
    const isDesktop = !isMobile && !isTablet;

    if (isMobile) {
      setDeviceType("Mobile");
    } else if (isTablet) {
      setDeviceType("Tablet");
    } else if (isDesktop) {
      setDeviceType("Desktop");
    }
  }, []);

  const desktopCatalogUrl = product.wpCatalogUrl.desktop;
  const mobileCatalogUrl = product.wpCatalogUrl.mobile;

  let url = "";
  if (deviceType === "Mobile" || deviceType === "Tablet") {
    url = mobileCatalogUrl;
  } else {
    url = desktopCatalogUrl;
  }

  const productMeta = {
    pageTitle: product.name + " | esilamoda.com",
    id: product.id,
    name: product.name,
    description: product.description,
    imageUrl: product.imageUrl[0],
  };

  return (
    <>
      <Head>
        <title>{productMeta.pageTitle} </title>
        <meta name="description" content={productMeta.description} />
        <meta property="og:title" content={productMeta.pageTitle} />
        <meta property="og:description" content={productMeta.description} />
        <meta property="og:image" content={productMeta.imageUrl} />
        <meta
          property="og:url"
          content={`https://esilamoda.com/product/${product.id}`}
        />
        <meta property="og:type" content="product.item" />
        <meta name="twitter:title" content={productMeta.pageTitle} />
        <meta name="twitter:description" content={productMeta.description} />
        <meta name="twitter:image" content={productMeta.imageUrl} />
      </Head>

      <Center>
        <Image
          src="images/logo.png"
          draggable={false}
          width={150}
          height={80}
          onClick={() => {
            window.open("/?ref=product-detail");
          }}
        />
      </Center>

      <Center my={10}>
        <Box
          p={4}
          bg="#e8f4fc"
          borderRadius={"sm"}
          boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.2)"}
        >
          <Flex p={15} direction={{ base: "column", md: "row" }} gap={5}>
            <Box w={{ base: 300, md: 500 }}>
              <AspectRatio ratio={1}>
                <Image
                  src={product.imageUrl[0]}
                  alt={product.name}
                  width={500}
                  height={500}
                  draggable="false"
                  borderRadius={{
                    base: "md",
                    md: "xl",
                  }}
                />
              </AspectRatio>
            </Box>
            <Flex direction={"column"}>
              <Stack>
                <Stack spacing="1">
                  <Text
                    fontWeight="medium"
                    color={useColorModeValue("gray.700", "gray.400")}
                    fontSize={"4xl"}
                  >
                    <>{product.name}</>
                  </Text>

                  <Text fontSize={"2xl"}>
                    <PriceTag price={product.price} currency="TRY" />
                  </Text>
                </Stack>
              </Stack>

              <Stack>
                <Stack spacing="1" maxW={450}>
                  <Text fontSize={"md"}>{product.description}</Text>
                </Stack>
              </Stack>
              <Stack>
                <Stack spacing="1" maxW={450}>
                  <Text fontSize={"md"}> Renk: {product.details.color}</Text>
                </Stack>
                <Stack spacing="1" maxW={450}>
                  <Text fontSize={"md"}> Beden: {product.details.size}</Text>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={4} align="center" mt={5}>
                <Link href={url} passHref>
                  <Button
                    colorScheme="whatsapp"
                    variant="outline"
                    width="full"
                    leftIcon={<BsWhatsapp />}
                  >
                    WhatsApp Katalog'da Gör
                  </Button>
                </Link>
                <Link href={product.instagramUrl} passHref>
                  <Button
                    colorScheme="pink"
                    variant="outline"
                    width="full"
                    leftIcon={<FaInstagram />}
                  >
                    Instagram Mağaza'da Gör
                  </Button>
                </Link>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Center>
      <>
        <Flex as={Center} direction={"column"}>
          <SocialMediaButtons />
          <>© 2023 Esila Moda. Tüm Hakları Saklıdır.</>
        </Flex>
      </>
    </>
  );
};

export async function getStaticPaths() {
  const paths = products.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const product = products.find((product) => product.id === id);

  return {
    props: {
      product,
    },
  };
}

export default ProductDetailPage;
