import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProjDetails from "./proj-details";
import Image from "next/image";
export const details = [
  {
    title: "Project Sagip",
    imgPath: "/images/latest-proj/sagip.jpg",
    content:
      "Project Sagip is a crowd-funding initiative launched to help and assist our fellow Kababayans particularly local farmers who are severely affected by Typhoon Quinta, Rolly and Ulysses.",
    imgWidth: 350,
    imgHeigth: 350,
  },
  {
    title: "Brigada Eskuwela",
    imgPath: "/images/latest-proj/brigada.jpeg",
    content:
      "Brigada Eskuwela is an initiative to help and support young farmers with their distance learning.",
    filled: "fill",
  },
  {
    title: "Sponsor-A-Farmer",
    imgPath: "/images/latest-proj/sponsor.png",
    content:
      "We help local farmers and fisherfolks by giving them grocery packs, term life insurance, hermetic technology bags which they can use to improve the shelf life of their product and water-bill subsidy for a month.",
    imgWidth: 450,
    imgHeigth: 350,
  },
  {
    title: "For Our Farmers' Scholarship",
    imgPath: "/images/latest-proj/students.webp",
    content:
      "FOFS helps and assist young farmers and farmer’s children with their education. We established FOFS to help local farmers and fisherfolks with the pressing problem of declining numbers of youth enrolled in school, specifically those from the farming community.",
    imgWidth: 350,
    imgHeigth: 350,
  },
];

export default function LatestProj() {
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
    <>
      <div className="flex flex-col relative w-11/12 mx-auto mt-5">
        <h1 className="mx-auto font-inter text-lg font-bold text-green-700 mb-5">
          Our Latest Projects
        </h1>
        <div ref={sliderRef} className="keen-slider  rounded-t-md">
          {details.map((d) => (
            <div
              key={d.title}
              className="keen-slider__slide flex items-center justify-center bg-orange-400 text-xl text-white h-48 max-h-max"
            >
              <Image
                src={d.imgPath}
                width={d.imgWidth}
                height={d.imgHeigth}
                layout={d.filled}
              />
            </div>
          ))}
          {loaded && instanceRef.current && (
            <div className="flex left-1/2 -translate-x-1/2 bottom-3 absolute">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "border-none w-2 h-2 bg-[#c5c5c5] rounded-full mr-3 md:cursor-pointer" +
                      (currentSlide === idx ? " bg-red-600" : "")
                    }
                  ></button>
                );
              })}
            </div>
          )}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <ProjDetails
        title={details[currentSlide].title}
        content={details[currentSlide].content}
      />
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? "fill-gray-600 opacity-50" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`w-5 h-5 absolute top-1/2   -translate-y-1/2 fill-white cursor-pointer ${
        props.left ? "left-3 " : "left-auto right-3"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
