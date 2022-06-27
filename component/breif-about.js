import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
export default function BriefAbout() {
  return (
    <div
      className="-mt-10 mx-auto relative h-44 w-11/12 flex flex-col bg-[#fffde9] rounded-xl"
      style={{ filter: "drop-shadow(0 5px 0.2rem black)" }}
    >
      <div className="font-nunito object-left-top text-sm pt-4 pl-3 text-black">
        <h1>#ForOurFarmers</h1>
      </div>
      <div className="flex flex-col pl-5 pt-1">
        <div className="h-3/5 w-0.5 absolute  bg-[#F33C3C] "></div>
        <p
          className="text-menu text-black font-openSans break-words pl-3 pt-1"
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
            <div className="flex flex-row text-sm font-nunito text-red-500 underline underline-offset-4">
              Find out More <FiChevronsRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
