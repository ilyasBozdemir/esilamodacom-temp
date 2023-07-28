import { useRadio } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

function Linktree() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://heylink.me/esilamoda/");
  }, []);
}

export default Linktree;
