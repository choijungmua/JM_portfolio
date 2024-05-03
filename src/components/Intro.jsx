// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function SubAbout() {
  // Create a ref for the about section
  useEffect(() => {
    gsap.from("#Text", {
      x: 360,
      y: 150,
      scrollTrigger: {
        trigger: "#textBox22",
        scrub: true,
        start: "center center",
        end: "30% top",
      },
      ease: "none", // easing 효과 없음
    });
    gsap.to(".gd", {
      x: 3000,
      scale: 20,
      scrollTrigger: {
        trigger: "#textBox22",
        markers: true,
        scrub: true,
        start: "center center",
        end: "bottom top",
      },
      ease: "none", // easing 효과 없음
    });
  }, []);

  return (
    <div id="textBox22" className="w-[100vw] h-full relative overflow-hidden">
      <div className="flex h-full flex-col justify-around gap-10 absolute">
        <div className="gd w-[7px] h-[7px] bg-red-400 rounded-full"></div>
        <div className="gd w-[10px] h-[10px] bg-sky-400 rounded-full"></div>
        <div className="gd w-[2px] h-[2px] bg-blue-400 rounded-full"></div>
        <div className="gd w-[16px] h-[16px] bg-green-400 rounded-full"></div>
        <div className="gd w-[8px] h-[8px] bg-sky-400 rounded-full"></div>
        <div className="gd w-[10px] h-[10px] bg-purple-400 rounded-full"></div>
      </div>
      <div className="flex w-full h-full items-center">
        <p className="flex overflow-hidden justify-center font-nanum-square-neo-Bold text-6xl whitespace-nowrap">
          <p id="Text" className="">
            저는모든문제에쉽게접근하는개발자가되고싶습니다
          </p>
        </p>
      </div>
    </div>
  );
}
export default SubAbout;
