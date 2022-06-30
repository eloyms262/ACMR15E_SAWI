import BrigadaSection from "./brigada";
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
          className="brightness-50 contrast-75 lg:h-screen lg:w-full"
        />
        <div className="absolute ">
          <h1
            className=" text-white text-4xl text-center font-poppins drop-shadow-md lg:text-8xl lg:font-bold"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Our Projects
          </h1>
        </div>
      </div>
      <BrigadaSection />
      <h1 className="text-xl font-poppins font-bold text-green-800 p-4 mx-auto lg:text-3xl  lg:flex lg:justify-center">
        Program Under Brigada Eskuwela
      </h1>
      <ProgSect />
      <LearningCenterSection />
      <SagipSection />
    </div>
  );
}
