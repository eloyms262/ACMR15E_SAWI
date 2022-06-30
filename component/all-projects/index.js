import BrigadaSection from "./brigada";
import CollectionPics from "./collection";
import LearningCenterSection from "./learning";
import ProgSect from "./program";
import SagipSection from "./sagip";

export default function LearningCenter() {
  return (
    <div className="bg-green-100">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center">
        <img
          src="/images/all-projects/hero.JPG"
          className="brightness-50 contrast-75"
        />
        <div className="absolute ">
          <h1
            className=" text-white text-4xl text-center font-poppins drop-shadow-md "
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Our Projects
          </h1>
        </div>
      </div>
      <BrigadaSection />
      <ProgSect />
      <LearningCenterSection />
      <SagipSection />
      <CollectionPics />
    </div>
  );
}
