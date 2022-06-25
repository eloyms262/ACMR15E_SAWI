import DesktopNavBar from "../component/desktop-nav";
import MobileNavBar from "../component/mobile-nav";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div >
      <DesktopNavBar/>
      <MobileNavBar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
