// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function SubAbout() {
  // Create a ref for the about section
  useEffect(() => {
    gsap.from("#introText", {
      x: 360,
      y: 150,
      scrollTrigger: {
        trigger: "#introCont",
        scrub: true,
        start: "center center",
        end: "30% top",
      },
      ease: "none", // easing 효과 없음
    });
    gsap.to(".blurRoundBall", {
      x: 3000,
      scale: 200,
      scrollTrigger: {
        trigger: "#introCont",
        markers: true,
        scrub: true,
        start: "center center",
        end: "bottom top",
      },
      ease: "none", // easing 효과 없음
    });
    gsap.from(".blurRoundBall", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#introCont",
        markers: true,
        scrub: true,
        start: "center center",
        end: "bottom top",
      },
      ease: "none", // easing 효과 없음
    });
  }, []);

  return (
    <div id="introCont" className="w-[100vw] h-full relative overflow-hidden">
      <div className="flex blur-3xl h-full flex-col justify-around gap-10 absolute">
        <div className="blurRoundBall w-[12px]  h-[12px] bg-red-400 rounded-full"></div>
        <div className="blurRoundBall w-[15px] h-[15px] bg-sky-400 rounded-full"></div>
        <div className="blurRoundBall w-[18px] h-[18px] bg-blue-400 rounded-full"></div>
        <div className="blurRoundBall w-[10px] h-[10px] bg-green-400 rounded-full"></div>
        <div className="blurRoundBall w-[20px] h-[20px] bg-sky-400 rounded-full"></div>
        <div className="blurRoundBall w-[14px] h-[14px] bg-purple-400 rounded-full"></div>
      </div>
      <div className="flex w-full h-full items-center">
        <p className="flex overflow-hidden justify-center font-nanum-square-neo-Bold text-6xl whitespace-nowrap">
          <p id="introText" className="">
            저는모든문제에쉽게접근하는개발자가되고싶습니다
          </p>
        </p>
      </div>
    </div>
  );
}
export default SubAbout;
