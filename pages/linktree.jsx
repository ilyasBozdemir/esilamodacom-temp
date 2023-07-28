import { useRouter } from "next/router";
import { useEffect } from "react";

function Linktree() {
  useEffect(() => {
    window.location.href = "https://heylink.me/esilamoda/";
  }, []);
}

export default Linktree;
