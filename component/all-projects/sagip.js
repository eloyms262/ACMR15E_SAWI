import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CollectionPics from "./collection";
export const details = [
  {
    imgPath: "/images/all-projects/sagip/p1.jpeg",
    content:
      "Project Sagip is a crowd-funding initiative launched to help and assist our fellow Kababayans particularly local farmers who are severely affected by Typhoon Quinta, Rolly and Ulysses.",
    imgWidth: "320",
    imgHeigth: "250",
  },
  {
    imgPath: "/images/all-projects/sagip/p2.jpg",
    content:
      "Project Sagip provides relief goods and hygiene packs to 12 different areas in the Philippines. In partnership with Kids for Kids PH and For the Future PH, Project Sagip also provides small subsidy to local farmers who lost their crops because of the typhoons.",
    imgWidth: "300",
    imgHeigth: "",
  },
  {
    imgPath: "/images/all-projects/sagip/p3.jpg",
    content:
      "As of November 23, 2020, Project Sagip has reached 4,430 Kababayans from all over the Philippines and has raised over one million pesos.",
    imgWidth: "320",
    imgHeigth: "250",
  },
];
export default function SagipSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="bg-green-100">
      <h1 className="flex justify-center font-poppins font-bold text-2xl py-4 text-green-800 lg:text-3xl ">
        Project Sagip
      </h1>
      <div className="lg:flex lg:flex-row lg:w-11/12 lg:mx-auto lg:mb-14 hidden">
        <img
          src="/images/all-projects/sagip/p1.jpeg"
          className="mt-2 w-4/12 h-4/12"
        />
        <div className="flex flex-col">
          {details.map((d) => (
            <div
              key={d.imgPath}
              className=" flex flex-col items-center text-md font-openSans text-black "
            >
              <p className="w-10/12 indent-12 text-justify lg:text-lg">
                <br />
                {d.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="navigation-wrapper lg:hidden">
        <div ref={sliderRef} className="keen-slider ">
          {details.map((d) => (
            <div
              key={d.title}
              className="keen-slider__slide flex flex-col items-center text-md font-openSans text-black "
            >
              <p className="w-10/12 indent-12 text-justify lg:text-xl">
                {d.content}
              </p>
              <img
                src={d.imgPath}
                width={d.imgWidth}
                height={d.imgHeigth}
                className="mt-2"
              />
            </div>
          ))}
        </div>
      </div>
      <CollectionPics />
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-7 text-lg font-inter font-bold text-green-800 lg:text-3xl">
          Ways to Donate
        </h1>
        <div className="flex flex-col mx-auto md:flex-row w-11/12 lg:mt-6 ">
          <img
            src="images/all-projects/donation/donate1.webp"
            className="mx-8 mb-4 "
          />
          <img
            src="images/all-projects/donation/donate2.webp"
            className="mx-8 mb-4"
          />
          <img
            src="images/all-projects/donation/donate3.webp"
            className="mx-8 mb-7"
          />
        </div>
        <div className=" w-11/12 flex flex-col justify-center items-center ">
          <h1 className=" text-lg font-inter font-bold text-green-800 mt-3 mb-4   lg:text-3xl">
            Project Sagip Donation Lines
          </h1>
          <div className="lg:flex lg:flex-row">
            <img
              src="images/all-projects/donation/details1.webp"
              className="w-80 mb-4 mx-12"
            />
            <img
              src="images/all-projects/donation/details2.webp"
              className="w-80 mb-4 mx-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
