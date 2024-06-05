// copyright - Choi Jung mu
// 2024-04-24 Update
//  업데이트 내용
//  gsap로 Main 페이지 꾸미기

// import the React
import { useEffect } from "react";
// import The gsap Animation
import { gsap } from "gsap";

import react from "../../assets/react.gif";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function MainText() {
  // timeline
  let textTimeLine = gsap.timeline();
  useEffect(() => {
    gsap.to(".reactImg", {
      scale: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".mainCont",
        start: "top top",
        end: "bottom center",
        duration: 1,
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <div>
      <div className="mainCont w-[100vw] h-[100vh]">
        <div className="absolute flex flex-col text-4xl gap-1 w-full mt-24 items-center font-nanum-square-neo-heavy ">
          <p className="text-6xl">Front End Developer</p>
          <p>Choi Jung Mu Portfolio</p>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex bottom-36 absolute text-base">
            <div className="flex items-center flex-col">
              <img
                src={react}
                alt=""
                className="reactImg flex w-[100px] h-[100px]"
              />
              <p className="mb-3 text-xl">CHAPTER</p>
              <p>I. 나는 누구인가?</p>
              <p>II. 나는 무엇을 사용하는가?</p>
              <p>III. 나는 무엇을 사용하는지</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainText;
