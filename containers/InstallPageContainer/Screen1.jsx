import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import LogoUploader from "../../components/LogoUploader";

function Screen1() {
  // localStorage key'lerini tanımla

  const shopNameKey = "shopName";
  const shopTelephoneKey = "shopTelephone";
  const mailKey = "mail";
  const addressKey = "address";
  const urlKey = "url";

  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopTelephone, setShopTelephone] = useState("");
  const [mail, setMail] = useState("");
  const [url, setUrl] = useState("");

  // Component mount olduğunda localStorage'den verileri al ve state'i güncelle
  useEffect(() => {

    const shopNameValue = localStorage.getItem(shopNameKey);
    const shopTelephoneValue = localStorage.getItem(shopTelephoneKey);
    const mailValue = localStorage.getItem(mailKey);
    const urlValue = localStorage.getItem(urlKey);
    const addressValue = localStorage.getItem(addressKey);

    if (shopNameValue) {
      setShopName(shopNameValue);
    }
    if (shopTelephoneValue) {
      setShopTelephone(shopTelephoneValue);
    }
    if (mailValue) {
      setMail(mailValue);
    }
    if (urlValue) {
      setUrl(urlValue);
    }
    if (addressValue) {
      setShopAddress(addressValue);
    }
  }, []);

  // Verileri localStorage'e kaydet
  useEffect(() => {
    localStorage.setItem(shopNameKey, shopName);
  }, [shopName]);

  useEffect(() => {
    localStorage.setItem(shopTelephoneKey, shopTelephone);
  }, [shopTelephone]);

  useEffect(() => {
    localStorage.setItem(mailKey, mail);
  }, [mail]);

  useEffect(() => {
    localStorage.setItem(urlKey, url);
  }, [url]);

  useEffect(() => {
    localStorage.setItem(addressKey, shopAddress);
  }, [shopAddress]);

  return (
    <>
      <>
        <Head>
          <title>Kurulum • Mağaza Genel Bilgileri</title>
        </Head>
      </>
      <Text my={4} fontWeight={"semibold"}>
        Mağaza Genel Bilgileri
      </Text>
      <Stack direction={{ base: "column", md: "row" }}>
        <FormControl mb={4}>
          <FormLabel>Mağaza Adı</FormLabel>
          <Input
            type="text"
            placeholder="Mağaza Adı Giriniz."
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Mağaza Telefonu</FormLabel>
          <Input
            type="text"
            placeholder="Mağaza Telefonu Giriniz."
            value={shopTelephone}
            onChange={(e) => setShopTelephone(e.target.value)}
          />
        </FormControl>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <FormControl mb={4}>
          <FormLabel>E-Posta Adresi</FormLabel>
          <Input
            type="text"
            placeholder="E-Posta Adresi Giriniz."
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Url</FormLabel>
          <Input
            type="text"
            placeholder="Url Giriniz."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </FormControl>
      </Stack>

      <FormControl mb={4}>
        <FormLabel>Mağaza Adresi</FormLabel>
        <Textarea
          value={shopAddress}
          placeholder="Mağaza Adresi Giriniz."
          onChange={(e) => setShopAddress(e.target.value)}
          maxH={105}
        />
        
      </FormControl>

      <Stack direction={{ base: "row", md: "row" }}>
        <LogoUploader label="Logo" />
        <LogoUploader label="Lazy Logo" />
        <LogoUploader label="Favicon" />
      </Stack>
    </>
  );
}

export default Screen1;
