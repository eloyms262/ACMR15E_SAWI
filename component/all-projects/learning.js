import React, { useState } from "react";

export default function LearningCenterSection() {
  const [isClicked, setIsClicked] = useState(false);
  const clicked = () => setIsClicked(true);
  //   const less = () => setIsClicked(false);
  return (
    <div className="bg-green-700 pb-4">
      <img
        src="/images/all-projects/center.jpeg"
        alt="Girl in a jacket"
        width="500"
        height="600"
      />
      <div className="flex flex-col">
        <h1 className="mx-auto text-xl pb-2 pt-5 text-white font-poppins font-bold">
          FOF Learning Center
        </h1>
        <h2 className="ml-6 text-white text-md font-poppins font-semibold">
          The story how it all started:
        </h2>
        <div className="w-11/12 items-center mx-auto text-justify">
          <p className="text-white indent-4 font-openSans mb-3">
            We were in the field, talking to farmers. We were getting their
            feedback to the previous transportation we provided to move their
            produce. Suddenly, a young girl approached us and asked her father
            (one of the farmers we are talking to) if she can go to “Bayan” to
            access internet, so she can research for her homework.
          </p>
          {isClicked ? (
            <div>
              <p className="text-white indent-4  font-openSans mb-3">
                Her father agreed and gave her 20 pesos. We noticed that she was
                bringing tons of notebooks & paper with her and so we asked why.
                She politely answered that she will write all of her research in
                the notebook, because they can’t afford to have it printed. And
                in that moment, we realized that we need to do something.
              </p>

              <p className="text-white indent-4  font-openSans mb-3">
                That was the beginning of our goal to build a Learning Center.
                We know that it was an ambitious goal for us — after all, we
                were still a newly established NGO, with very small funding. But
                we are lucky to have generous people behind our back, who did
                not only see the opportunity to help, but the opportunity to
                rewrite a chapter of someone else’s life — for the better.
              </p>

              <p className="text-white indent-4  font-openSans mb-3">
                You see, majority of the students from the farming communities
                will not finish their studies because of poverty. Fast forward
                to seven months later, we finally completed the construction of
                FOF Learning Center. FOF Learning center is equipped with
                desktop computers, printers and internet connection & it
                accommodates almost 150 students a week. All of them are from
                the farming communities.
              </p>
            </div>
          ) : null}
        </div>
        <button
          className="text-white bg-red-500 w-2/5 h-7 mx-auto rounded-xl mt-2 p-4 flex items-center justify-center"
          onClick={() => setIsClicked(!isClicked)}
        >
          {isClicked ? "Showless" : "Showmore"}
        </button>
      </div>
    </div>
  );
}
