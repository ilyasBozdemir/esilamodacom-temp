import { useRouter } from "next/router";
import { useEffect } from "react";

function Linktree() {
  return (
    <div>
      <h1>Yönlendiriliyorsunuz...</h1>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://heylink.me/esilamoda/",
      permanent: false,
      replace: true,
    },
  };
}

export default Linktree;
