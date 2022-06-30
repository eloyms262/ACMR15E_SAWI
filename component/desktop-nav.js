import Link from "next/link";
import { navLinks } from "./mobile-nav/menu-btn";
import { useRouter } from "next/router";
export default function DesktopNavBar() {
  const router = useRouter();
  return (
    <div className=" absolute z-10 top-0 w-full hidden md:block">
      <div className=" container mx-auto  w-full flex flex-row items-center justify-between ">
        <Link href={"/"}>
          <img
            src={"/images/FOF_Logo.png"}
            alt="For our farmers Logo"
            className="center h-28 ml-4"
          />
        </Link>
        <ul className="text-sm flex flex-row">
          {navLinks.map((l) => (
            <Link href={l.link} key={l.navName}>
              <div
                className={
                  (router.pathname == l.link
                    ? "text-green-400 font-roboto font-bold"
                    : "border-transparent text-white font-inter  ") + " p-4"
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
