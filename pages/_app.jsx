// pages/_app.js
import { MainContext } from "../contexts/MainContext";
import { ChakraProvider } from "@chakra-ui/react";
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import EmptyLayout from "../layouts/EmptyLayout";
import theme from "../src/theme";
import React from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const data = {};
  let Layout;
  const router = useRouter();

  const InstalledWebSite = true;

  if (!InstalledWebSite) router.push("kurulum");



  if (router.pathname === "/") {
    Layout = EmptyLayout;
  } else if (router.pathname.startsWith("/admin")) {
    Layout = AdminLayout;
  } else if (router.pathname === "/kurulum") {
    Layout = EmptyLayout;
  } else if (router.pathname === "/linktree") {
    Layout = EmptyLayout;
  } else {
    Layout = EmptyLayout;
  }


  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainContext.Provider value={data}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
