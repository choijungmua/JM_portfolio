// import React and other necessary libraries
import React, { useEffect } from "react";
import gsap from "gsap";
import Me from "../../assets/Me.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function StartIntro() {
  // Create a ref for the about section
  useEffect(() => {
    gsap.from("#meImg", {
      ease: "none",
      y: 1000,
      scrollTrigger: {
        trigger: ".meCont",
        scrub: 3,
        start: "bottom center",
        end: "bottom center",
        // markers: true,
      },
    });
  }, []);
  return (
    <>
      <div className="meCont w-1/2">
        <img src={Me} alt="" id="meImg" className=" rounded-2xl" />
      </div>
    </>
  );
}
export default StartIntro;
