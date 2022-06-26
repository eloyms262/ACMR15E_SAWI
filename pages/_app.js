import ChatButton from "../component/chat-btn";
import DesktopNavBar from "../component/desktop-nav";
import MobileNavBar from "../component/mobile-nav";
import FooterSection from "../component/footer-section";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DesktopNavBar />
      <MobileNavBar />
      <Component {...pageProps} />
      <ChatButton />
      <div className="h-screen bg-slate-500"></div>
      <FooterSection />
    </ChakraProvider>
  );
}

export default MyApp;
