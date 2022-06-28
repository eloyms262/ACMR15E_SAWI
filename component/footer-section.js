import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    //include link for image (homepage)
    <footer className="p-3 bg-[#F5F5DC] lg:px-24 lg:pt-10 lg:pb-6">
      <div className="items-center justify-between grid grid-cols-1 lg:grid-cols-3">
        <div className="flex justify-center sm:mb-6">
          <Image
            src={"/images/FOF_Logo_Cropped.png"}
            width={250}
            height={125}
            alt="For our farmers Logo"
            className="center object-contain"
          />
        </div>
        <div className="flex justify-center sm:mb-6">
          <ul className=" items-center grid grid-cols-3 gap-1 text-[#228833]  lg:gap-6">
            <li>
              <Link href="/" className="mr-2 hover:underline md:mr-4  ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="mr-2 hover:underline md:mr-4">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/donation" className="mr-2 hover:underline md:mr-4 ">
                Donation
              </Link>
            </li>
            <li>
              <Link href="/about" className="mr-2 hover:underline md:mr-4">
                About
              </Link>
            </li>
            <li>
              <Link href="/partners" className="mr-2 hover:underline md:mr-4">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="justify-center grid grid-cols-1 px-6 sm:mx-6 mt-5 text-center lg:text-left">
          <span className=" mb-3">FOR OUR FARMERS</span>
          <span className="mb-3">
            FOR OUR FARMERS’ LEARNING CENTER, BRGY. ANO, SAN CARLOS, PANGASINAN,
            2420
          </span>
          <span className="text-[#228833]">(075) 636 8986</span>
        </div>
      </div>
      <hr className="mb-3 mt-5 border-[#BBBBAA] h-1" />
      <span className="block text-center">COPYRIGHT © sawi 2022 </span>
    </footer>
  );
}
