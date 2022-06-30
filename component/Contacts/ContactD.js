import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
export default function SocialSection() {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="mx-auto text-pink-700 mb-4 font-poppins text-4xl">
          Our Socials
        </h1>
        <div className="flex flex-row justify-evenly items-center mb-3">
          <a
            href="https://fb.com/forourfarmersph"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <button>
              <BsFacebook className="text-pink-700 w-9 h-9" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/forourfarmers/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div>
              <AiFillInstagram className="text-pink-700 w-10 h-10" />
            </div>
          </a>
          <a
            href="https://twitter.com/forourfarmers"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div>
              <AiFillTwitterCircle className="text-pink-700 w-9 h-9" />
            </div>
          </a>
        </div>
        <div className="h-0.5 w-3/5 mx-auto bg-pink-700 rounded-lg"> </div>
        <div className="mx-auto">
          <h1 className="text-nunito lg:text-2xl text-lg text-pink-700">
            Follow us for more update!
          </h1>
        </div>
        <div className="mx-auto">
          <Image src={"/images/bonsai-tree.png"} width={150} height={225} />
        </div>
      </div>
    </div>
  );
}
