import Image from "next/image";
import { HiMenu } from "react-icons/hi";
export default function MobileNavBar() {
  return <div className="bg-orange-200 md:hidden">
    <div className="container mx-auto h-11 flex flex-row items-center justify-center relative">
      <Image
        src={"/images/FOF_Logo.png"}
        width={60}
        height={60}
        alt="For our farmers Logo"
        className="center"
      />
      <HiMenu className="h-6 w-6 absolute right-5" />
    </div>
  </div>;
}
