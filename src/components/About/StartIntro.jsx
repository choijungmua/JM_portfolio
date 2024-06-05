import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin globally
gsap.registerPlugin(ScrollTrigger);

function StartIntro() {
  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  return (
    <div
      id="containerIntroStart"
      className="h-full flex items-center justify-center"
    >
      <p id="TextIntroStart" className="text-2xl">
        Legacy한 코드는 지양한다.
      </p>
    </div>
  );
}

export default StartIntro;
