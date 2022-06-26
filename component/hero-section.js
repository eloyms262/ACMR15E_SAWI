import Image from "next/image";
import Donate from "./DonateB";
import Sponsor from "./SponsorB";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-[#828577] relative flex justify-center  ">
        <Image
          src={"/images/donate.JPG"}
          width={700}
          height={700}
          className="object-cover object-left	 mix-blend-multiply "
        />
        <div className="absolute top-24">
          <h1
            className=" pb-8 text-white text-4xl text-center font-poppins drop-shadow-md"
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
