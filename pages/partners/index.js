import Partners from "../../component/our-partners";

export default function PartnerPage() {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <img
          src="/images/our-partners/head.jpeg"
          className="brightness-50 contrast-75 w-full lg:h-screen"
        />
        <div className="absolute">
          <h1
            className=" text-white text-4xl text-center font-poppins drop-shadow-md  lg:text-7xl"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Our Partners
          </h1>
        </div>
      </div>
      <Partners />
    </div>
  );
}
PartnerPage.title = "Partners";
