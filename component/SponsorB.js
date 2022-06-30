// NO LINK REDIRECT YET
import { GiFarmer } from "react-icons/gi";
import Link from "next/link";
export default function DonateButton() {
  return (
    <div>
      <Link href="/donation">
        <div className="flex justify-center items-center sm:flex-row p-2 rounded-lg  bg-[#52A511] hover:bg-[#44890f] text-white transition ease-linear duration-100 md:w-60 md:h-16 md:text-xl md:rounded-3xl md:mt-4  ">
          <GiFarmer className="h-4 w-4 md:h-6 md:w-6" /> Sponsor a Farmer
        </div>
      </Link>
    </div>
  );
}
