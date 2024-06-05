// import React and other necessary libraries
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin globally
gsap.registerPlugin(ScrollTrigger);

function SubAbout() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.from("#introText", {
        x: 360,
        y: 150,
        scrollTrigger: {
          trigger: "#introCont",
          scrub: true,
          start: "bottom 30%",
          end: "bottom top",
          // markers: true,
        },
        ease: "none", // easing 효과 없음
      });
      gsap.to(".blurRoundBall", {
        x: 1600,
        scale: 30,
        scrollTrigger: {
          trigger: "#introCont",
          scrub: true,
          start: "bottom 30%",
          end: "bottom top",
          // markers: true,
        },
        ease: "none", // easing 효과 없음
      });
    }
  }, []);

  return (
    <div id="introCont" className="w-[100vw] h-full relative">
      <div className="flex blur-3xl h-full flex-col justify-around gap-10 absolute">
        <div className="blurRoundBall w-[12px] h-[12px] bg-red-400 rounded-full"></div>
        <div className="blurRoundBall w-[15px] h-[15px] bg-sky-400 rounded-full"></div>
        <div className="blurRoundBall w-[18px] h-[18px] bg-blue-400 rounded-full"></div>
        <div className="blurRoundBall w-[10px] h-[10px] bg-green-400 rounded-full"></div>
        <div className="blurRoundBall w-[20px] h-[20px] bg-sky-400 rounded-full"></div>
        <div className="blurRoundBall w-[14px] h-[14px] bg-purple-400 rounded-full"></div>
      </div>
      <div className="flex w-full h-full items-center">
        <p className="flex overflow-hidden justify-start font-nanum-square-neo-Bold text-6xl p-1 whitespace-nowrap">
          <span id="introText">
            저는 문제의 방향성을 제시할 수 있는 개발자가 꿈입니다.
          </span>
        </p>
      </div>
    </div>
  );
}

export default SubAbout;
