import { useKeenSlider } from "keen-slider/react";
import { useRef } from "react";
import "keen-slider/keen-slider.min.css";

export const collection = [
  {
    imgPath: "/images/all-projects/sagip/p1.png",
    imgStyle: { objectPosition: "top" },
    imgWidth: 350,
    imgWidth2: 100,
  },
  {
    imgPath: "/images/all-projects/sagip/p2.jpg",
    imgStyle: { objectPosition: "top" },
    imgWidth: 350,
    imgWidth2: 100,
  },
  {
    imgPath: "/images/all-projects/sagip/p3.jpg",
    imgStyle: { objectPosition: "top" },
    imgWidth: 350,
    imgWidth2: 100,
  },
  {
    imgPath: "/images/all-projects/sagip/p4.jpeg",
    imgStyle: { objectPosition: "top" },
    imgWidth: 350,
    imgWidth2: 100,
  },
  {
    imgPath: "/images/all-projects/sagip/p5.jpeg",
    imgStyle: { objectPosition: "top" },
    imgWidth: 350,
    imgWidth2: 100,
  },
  {
    imgPath: "/images/all-projects/sagip/p6.jpeg",
    imgStyle: { objectPosition: "top" },
    imgWidth: 350,
    imgWidth2: 100,
  },
];
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}
export default function CollectionPics() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <div className="mt-5 lg:w-11/12 lg:mx-auto">
      {" "}
      <div ref={sliderRef} className="keen-slider lg:h-screen ">
        {collection.map((d) => (
          <div
            key={d.imgPath}
            className="keen-slider__slide flex items-center justify-center bg-orange-400 text-xl text-white h-48  "
          >
            <img
              src={d.imgPath}
              style={{ objectFit: "contain" }}
              width={d.imgWidth}
              className="bg-contain object-top w-full "
            />
          </div>
        ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider">
        {collection.map((d) => (
          <div
            key={d.imgPath}
            className="keen-slider__slide flex items-center justify-center bg-orange-400 text-xl text-white h-20 w-40 bg-contain lg:h-44 lg:bg-cover"
            style={{ backgroundImage: `url(${d.imgPath})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
