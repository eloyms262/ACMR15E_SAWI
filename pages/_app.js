import ChatButton from "../component/chat-btn";
import DesktopNavBar from "../component/desktop-nav";
import MobileNavBar from "../component/mobile-nav";
import FooterSection from "../component/footer-section";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const pageTitle = Component.title + " — FOF Foundation";

  return (
    <ChakraProvider>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <DesktopNavBar />
      <MobileNavBar />
      <Component {...pageProps} />
      <ChatButton />
      <FooterSection />
    </ChakraProvider>
  );
}

export default MyApp;
