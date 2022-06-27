import BriefAbout from "./breif-about";
import HeroSection from "./hero-section";
import LatestProj from "./latest-proj";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div class="bg-green-100">
        <BriefAbout />
        <LatestProj />
      </div>
    </div>
  );
}
