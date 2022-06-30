import Content1 from "./1st_content";
import Content2 from "./2nd_content";

export default function AboutUs() {
  return (
    <div className="w-full bg-green-50">
      <div className="relative flex items-center justify-center">
        <img
          src="/images/about-us/head.jpg"
          className="brightness-50 contrast-75 lg:h-screen w-full "
        />
        <div className="absolute ">
          <h1
            className=" text-white text-4xl text-center font-poppins drop-shadow-md lg:text-7xl"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            About Us
          </h1>
        </div>
      </div>
      <Content1 />
      <Content2 />
    </div>
  );
}
