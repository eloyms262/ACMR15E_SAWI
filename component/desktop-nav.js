import Link from "next/link";
import { navLinks } from "./mobile-nav/menu-btn";
import { useRouter } from "next/router";
export default function DesktopNavBar() {
  const router = useRouter();
  return (
    <div className="z-10 top-0 hidden px-9 absolute md:block w-full">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Link href={"/"}>
          <img
            src={"/images/FOF_Logo.png"}
            alt="For our farmers Logo"
            className=" h-44  cursor-pointer -mt-8"
          />
        </Link>

        <ul className="text-sm flex-row flex ">
          {navLinks.map((l) => (
            <Link href={l.link} key={l.navName}>
              <div
                className={
                  (router.pathname == l.link
                    ? "text-green-400 font-roboto font-bold cursor-pointer text-lg"
                    : "border-transparent text-white font-inter cursor-pointer text-lg") +
                  " p-4"
                }
              >
                {l.navName}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
