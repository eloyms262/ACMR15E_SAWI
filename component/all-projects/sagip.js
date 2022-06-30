import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
    <div className="bg-green-200">
      <h1 className="flex justify-center font-poppins font-bold text-2xl py-4 text-green-800">
        Project Sagip
      </h1>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider ">
          {details.map((d) => (
            <div
              key={d.title}
              className="keen-slider__slide flex flex-col items-center text-md font-openSans text-black "
            >
              <p className="w-10/12 indent-12 text-justify">{d.content}</p>
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
    </div>
  );
}
