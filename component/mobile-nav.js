import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { BiDonateHeart } from "react-icons/bi";
export default function MobileNavBar() {
  return (
    <div className="md:hidden">
      <div className="absolute top-0 z-10 container mx-auto h-11 flex flex-row items-center justify-around">
        <Image
          src={"/images/FOF_Logo.png"}
          width={90}
          height={90}
          alt="For our farmers Logo"
          className="center grow"
        />
        <div className="flex flex-row gap-3"> 
          <div className="h-6 w-6 rounded-full bg-[#9C0052] flex justify-center items-center">
            <BiDonateHeart className="text-white" />
          </div>
          <div className="h-6 w-16 bg-[#D6EBF9] flex items-center justify-center rounded-xl">
            <span className="text-menu font-roboto pr-1 text-menu-txt ">
              Menu
            </span>
            <HiMenu className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
