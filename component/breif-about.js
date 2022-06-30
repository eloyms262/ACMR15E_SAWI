import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
export default function BriefAbout() {
  return (
    <div
      className="-mt-10 mx-auto relative w-11/12 h-56 flex flex-col bg-[#fffde9] rounded-xl lg:h-64 lg:w-8/12"
      style={{ filter: "drop-shadow(0 5px 0.2rem black)" }}
    >
      <div className="font-nunito object-left-top text-lg pt-3 pl-3 text-black indent-4">
        <h1 className="lg:text-3xl "> #ForOurFarmers</h1>
      </div>
      <div className="flex flex-col pl-5 pt-1 ">
        <div className="h-36 w-1 absolute  bg-[#F33C3C] lg:ml-4 "></div>
        <p
          className="text-btnPrj text-black font-openSans break-words pl-3 pt-1 lg:text-xl lg:w-11/12 lg:break-words lg:mx-8 lg:pl-0 lg:text-justify"
          color="white"
        >
          We started as a COVID-19 donation drive initiative to help farmers who
          were greatly affected by the pandemic.
          <br />
          <br />
          For our Farmers PH, Inc. is a youth-led, non-stock, non-profit
          organization which aims to help and uplift local farmers and
          fisherfolks.
        </p>
        <div className="mt-2 self-end mr-4">
          <Link href="/about">
            <div className="flex flex-row text-sm font-nunito text-red-500 underline underline-offset-4 lg:text-xl">
              Find out More <FiChevronsRight className="h-8 w-8" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
