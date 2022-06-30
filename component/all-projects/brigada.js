import ProgSect from "./program";

export default function BrigadaSection(props) {
  return (
    <div>
      <div className="w-11/12 flex mx-auto bg-yellow-200 m-5 rounded-tr-md rounded-br-md lg:w-8/12">
        <img
          src="/images/all-projects/brigada.jpeg"
          className="w-40 h-40 rounded-tl-md rounded-bl-md lg:w-72 lg:h-72"
        />
        <div className="mx-4">
          <h1 className="text-sm font-inter font-bold text-green-700 mt-2 lg:text-4xl lg:p-6">
            Brigada Eskuwela
          </h1>
          <p className="text-btnPrj text-justify mt-2 indent-6 lg:text-xl lg:indent-12 lg:w-11/12 lg:text-justify lg:mx-auto">
            For our Farmers Brigada Eskuwela is an initiative to help and
            support young farmers with their distance learning.
          </p>
        </div>
      </div>
      {/* <ProgSect /> */}
    </div>
  );
}
