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
        markers: true,
        scrub: true,
        start: "center center",
        end: "30% top",
      },
      ease: "none", // easing 효과 없음
    });
  }, []);

  return (
    <div id="textBox22" className="w-[100vw] h-full relative">
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
