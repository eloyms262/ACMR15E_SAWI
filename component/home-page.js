import BriefAbout from "./breif-about";
import HeroSection from "./hero-section";
import LatestProj from "./latest-proj";
import SocialSection from "./social";
import VnMSection from "./vm-section";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="bg-green-100">
        <BriefAbout />
        <VnMSection />
        <LatestProj />
        <SocialSection />
      </div>
    </div>
  );
}
