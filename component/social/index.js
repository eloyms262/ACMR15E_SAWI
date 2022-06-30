import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
export default function SocialSection() {
  return (
    <div className="flex flex-col lg:mt-14 lg:w-2/4 lg:flex lg:mx-auto">
      <h1 className="mx-auto text-pink-700 mb-4 font-poppins text-4xl lg:font-bold ">
        Our Socials
      </h1>
      <div className="flex flex-row justify-evenly items-center mb-3 lg:justify-evenly ">
        <a
          href="https://fb.com/forourfarmersph"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <button>
            <BsFacebook className="text-pink-700 w-9 h-9 lg:w-14 lg:h-14" />
          </button>
        </a>
        <a
          href="https://www.instagram.com/forourfarmers/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <div>
            <AiFillInstagram className="text-pink-700 w-10 h-10 lg:w-16 lg:h-16" />
          </div>
        </a>
        <a
          href="https://twitter.com/forourfarmers"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <div>
            <AiFillTwitterCircle className="text-pink-700 w-9 h-9 lg:w-14 lg:h-14" />
          </div>
        </a>
      </div>
      <div className="h-0.5 w-3/5 mx-auto bg-pink-700 rounded-lg"> </div>
      <div className="mx-auto ">
        <h1 className="text-nunito text-lg text-pink-700 lg:text-2xl lg:mt-4">
          Follow us for more update!
        </h1>
      </div>
      <div className="mx-auto">
        <img
          src={"/images/bonsai-tree.png"}
          className="h-28 w-28 lg:h-36 lg:w-36"
        />
      </div>
    </div>
  );
}
