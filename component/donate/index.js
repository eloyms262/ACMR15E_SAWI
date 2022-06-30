import { FaCcPaypal } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { MdBookOnline } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
export const details = [
  { title: "Landbank", desc: "3217 0633 36", Icon: RiBankFill },
  { title: "BPI", desc: "2819 0660 03 ", Icon: RiBankFill },
  { title: "BDO", desc: "004070174810 ", Icon: RiBankFill },
  { title: "GCASH", desc: "0927 781 1678  ", Icon: MdBookOnline },
  {
    title: "Canada Interac E-transfer",
    desc: " astadena@gmail.com ",
    Icon: MdBookOnline,
  },
];
export default function DonateSection() {
  return (
    <div className="bg-green-100">
      <div className="relative flex items-center justify-center">
        <img
          src="/images/donation-page/hero.JPG"
          className="brightness-50 contrast-75 lg:h-screen lg:w-full"
        />
        <div className="absolute ">
          <h1
            className=" text-white text-4xl text-center font-poppins drop-shadow-md lg:text-8xl lg:font-bold"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Donation Lines
          </h1>
        </div>
      </div>
      <h1 className="flex justify-center text-xl font-poppins font-bold text-green-600 mt-4 lg:text-3xl">
        For Monetary Donation
      </h1>

      <div className="flex flex-col mx-auto w-11/12 my-4 lg:w-11/12 lg:grid lg:grid-cols-3 lg:gap-4">
        <div className="flex flex-col items-center justify-center border border-green-800 bg-white  rounded-xl p-8 mb-2 lg:mb-0  ">
          <div className="flex flex-row items-center mb-2">
            <FaCcPaypal className="h-6 w-6 mr-3 text-green-600 " />
            <h1 className="text-3xl font-inter font-bold text-green-600 ">
              Paypal
            </h1>
          </div>
          <p className="text-md font-openSans text-green-800 underline underline-offset-4">
            forourfarmers.org@gmail.com
          </p>
          <div className="w-11/12 h-[0.5px] bg-green-400 my-4"></div>
          <p className="text-md font-openSans text-green-800 ">
            PayPal.Me/forourfarmersorg
          </p>
        </div>
        {details.map(({ Icon, title, desc }) => (
          <div className="flex flex-col items-center justify-center bg-white border border-green-800 rounded-xl p-8 mb-2 lg:mb-0">
            <div className="flex flex-row items-center mb-2">
              <Icon className="h-6 w-6 mr-3 text-green-600 " />
              <h1 className="text-3xl font-inter font-bold text-green-600 break-words">
                {title}
              </h1>
            </div>
            <p className="text-lg font-openSans text-green-800 mx-auto underline underline-offset-4">
              {desc}
            </p>
          </div>
        ))}
      </div>
      <h1 className="flex justify-center text-xl font-poppins font-bold text-green-600 mt-4 lg:text-3xl lg:my-4 ">
        In Kind Donation
      </h1>
      <div className="w-11/12 flex flex-col items-center mx-auto p-4 bg-white border border-green-700 rounded-xl py-4 lg:w-4/12">
        <div className="flex flex-row  justify-center w-11/12">
          <ImLocation2 className="w-12 h-12 text-green-600 lg:hidden" />
          <p className="font-poppins text-justify text-sm ml-4 text-green-800 lg:text-lg ">
            FOR OUR FARMERS’ LEARNING CENTER, <br className="hidden lg:block" />{" "}
            Riverside, Brgy. Ano, San Carlos, Pangasinan
          </p>
        </div>
        <div className="w-11/12 h-0.5 bg-white my-4"></div>

        <p className="font-poppins text-justify text-green-800 lg:text-lg">
          Focal Person: Aileen Tadena
        </p>
        <p className="font-poppins text-justify text-green-800">
          0917 316 6097
        </p>
      </div>
      <div className="lg:p-2" />
    </div>
  );
}
