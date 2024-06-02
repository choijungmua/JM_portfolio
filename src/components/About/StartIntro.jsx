// import React and other necessary libraries
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function StartIntro() {
  // Create a ref for the about section
  useEffect(() => {
    gsap.to("#TextIntroStart", {
      ease: "none",
      scale: 5,
      scrollTrigger: {
        trigger: "#containerIntroStart",
        scrub: 3,
        start: "center center",
        end: "bottom top",
        markers: true,
      },
    });
  }, []);
  return (
    <>
      <div
        id="containerIntroStart"
        className=" h-full flex items-center justify-center"
      >
        <p id="TextIntroStart" className=" text-2xl">
          Legacy한 코드는 지양한다.
        </p>
      </div>
    </>
  );
}
export default StartIntro;
