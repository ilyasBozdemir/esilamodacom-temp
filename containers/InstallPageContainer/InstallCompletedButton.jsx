import { Button } from "@chakra-ui/react";
import React from "react";

function InstallCompletedButton() {
  const installCompletedHandled = () => {
    //Screen1

    const shopNameKey = "shopName";
    const shopTelephoneKey = "shopTelephone";
    const mailKey = "mail";
    const addressKey = "address";
    const urlKey = "url";

    const shopNameValue = localStorage.getItem(shopNameKey);
    const shopTelephoneValue = localStorage.getItem(shopTelephoneKey);
    const mailValue = localStorage.getItem(mailKey);
    const urlValue = localStorage.getItem(urlKey);
    const addressValue = localStorage.getItem(addressKey);

    //Screen2
    const facebookKey = "facebook";
    const instagramKey = "instagram";
    const twitterKey = "twitter";
    const youtubeKey = "youtube";
    const pinterestKey = "pinterest";
    const whatsAppKey = "whatsApp";

    const facebookValue = localStorage.getItem(facebookKey);
    const instagramValue = localStorage.getItem(instagramKey);
    const twitterValue = localStorage.getItem(twitterKey);
    const youtubeValue = localStorage.getItem(youtubeKey);
    const pinterestValue = localStorage.getItem(pinterestKey);
    const whatsAppValue = localStorage.getItem(whatsAppKey);

    //Screen3

    //Screen4

    //
  };
  return (
    <>
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={installCompletedHandled}
      >
        Kurulumu Tamamla
      </Button>
    </>
  );
}

export default InstallCompletedButton;
