import Image from "next/image";
import Donate from "./DonateB";
import Sponsor from "./SponsorB";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-[#828577] relative flex justify-center ">
        <Image
          src={"/images/donate.JPG"}
          width={400}
          height={400}
          className="object-cover object-left mix-blend-multiply"
        />
        <h1
          className="absolute text-white text-4xl text-center	top-24 font-poppins drop-shadow-md"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
        >
          Bayanihan Para <br /> sa Magsasaka
        </h1>
      </div>
      <Donate/>
      <Sponsor/>

      <div></div>
    </div>
  );
}
