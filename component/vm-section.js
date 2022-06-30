import Image from "next/image";
export default function VnMSection() {
  return (
    <div>
      {" "}
      <div className="lg:m-8 lg:w-10/12 lg:mx-auto">
        <div className="lg:flex lg:flex-row lg:p-10 lg:mx-20 items-center mt-14 p-3 bg-[#fffde9]    border lg:rounded-xl">
          <div className="lg:w-6/12 h-full">
            <div className="lg:w-full lg:px-10">
              <Image
                src={"/images/mission.PNG"}
                layout="responsive"
                width={22}
                height={15}
                alt="History Image"
                className="center"
              />
            </div>
          </div>
          <div className="lg:w-6/12">
            <h1 className="font-medium text-xl mb-2  text-center">Mission</h1>
            <div className="text-justify">
              <p className="mb-3 indent-10 lg:indent-14">
                We aim to help and uplift Filipino farmers and fisherfolks
                through sustainable and inclusive projects towards a more
                productive agriculture sector of the country.
              </p>
              <p className="mb-3 indent-10 lg:indent-14">
                Realizing that even before the pandemic, farmers are already the
                poorest of the poor in the country, our team is committed in
                helping and assisting farmers and fisherfolks through
                sustainable and inclusive projects.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:p-10 lg:mx-20 items-center mt-14 p-3 bg-[#fffde9]    border lg:rounded-xl mb-8">
          <div className="lg:w-6/12">
            <Image
              src={"/images/vission.JPG"}
              width={550}
              height={300}
              alt="Why Image"
              className="center object-contain"
            />
          </div>
          <div className="lg:w-6/12">
            <h1 className="font-medium text-xl mb-2  text-center">Vision </h1>
            <div className="text-justify">
              <p className="mb-3 indent-10">
                We aspire and envision positive changes in the state of life of
                our farmers and fisher folks -- better opportunities, better
                income and for them to finally get the recognition they deserve
                and no longer be called the unsung heroes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
