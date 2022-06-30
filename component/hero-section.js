import Image from "next/image";
import Sponsor from "./SponsorB";
import { BsArrowDownCircleFill } from "react-icons/bs";
export default function HeroSection() {
  return (
    <div className="mb-6  ">
      <div className="bg-[#828577] relative flex justify-center ">
        <img
          src={"/images/donate.JPG"}
          className="object-cover brightness-50 contrast-75 w-full h-72 lg:h-screen lg:w-screen "
        />
        <div className="absolute top-24  lg:flex lg:flex-col lg:top-1/4">
          <h1
            className=" pb-8 text-white text-4xl text-center font-poppins font-bold drop-shadow-md lg:text-8xl "
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Bayanihan Para <br /> sa Magsasaka
          </h1>
          <div className="flex flex-row justify-evenly">
            {/* <Donate /> */}
            <Sponsor />
          </div>
        </div>
      </div>
    </div>
  );
}
