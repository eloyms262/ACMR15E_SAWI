import DesktopNavBar from "../component/desktop-nav";
import MobileNavBar from "../component/mobile-nav";
import FooterSection from "../component/footer-section"
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div >
      <DesktopNavBar/>
      <MobileNavBar/>
      <Component {...pageProps} />
      <FooterSection/>
    </div>
  );
}

export default MyApp;
