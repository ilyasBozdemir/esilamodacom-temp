import { ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
function SocialMediaButtons() {
  const router = useRouter();
  return (
    <>
      <ButtonGroup variant="ghost">
        <Tooltip
          label="Facebook"
          aria-label="Facebook"
          hasArrow
          placement="top"
          bg="purple.400"
        >
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebookF fontSize="1.25rem" />}
            _hover={{ bg: "blue.500", color: " white" }}
            onClick={() => {
              window.open(
                "https://www.facebook.com/people/Esila-Moda/100091268741184/",
                "_blank"
              );
            }}
          />
        </Tooltip>
        <Tooltip
          label="Instagram"
          aria-label="Instagram"
          hasArrow
          placement="top"
          bg="purple.400"
        >
          <IconButton
            as="button"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.25rem" />}
            _hover={{
              bgGradient: "linear(to-r, #833AB4, #FD1D1D, #F56040)",
              color: " white",
            }}
            onClick={() => {
              window.open("https://www.instagram.com/esilamoda/", "_blank");
            }}
          />
        </Tooltip>
        <Tooltip
          label="Whatsapp"
          aria-label="Whatsapp"
          hasArrow
          placement="top"
          bg="purple.400"
        >
          <IconButton
            as="button"
            aria-label="Whatsapp"
            icon={<FaWhatsapp fontSize="1.25rem" />}
            _hover={{ bg: "#25D366", color: " white" }}
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=905058177680&text&type=phone_number&app_absent=0",
                "_blank"
              );
            }}
          />
        </Tooltip>

        <Tooltip
          label="Pinterest"
          aria-label="Pinterest"
          hasArrow
          placement="top"
          bg="purple.400"
        >
          <IconButton
            as="button"
            aria-label="Pinterest"
            icon={<FaPinterestP fontSize="1.25rem" />}
            _hover={{ bg: "#BD081C", color: " white" }}
            onClick={() => {
              window.open("https://tr.pinterest.com/esilamodacom/", "_blank");
            }}
          />
        </Tooltip>
      </ButtonGroup>
    </>
  );
}

export default SocialMediaButtons;
