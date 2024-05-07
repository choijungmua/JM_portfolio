// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vane from "../assets/Vane.png";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Me from "../assets/Me.jpg";
import EndIntro from "./EndIntro";
import Profile from "../assets/Profile.jpg";
import MiddleIntro from "./MiddleIntro";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function SubAbout() {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".AboutCont",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom top",
      },
      snap: {
        snapTo: 1 / (sections.length - 1),
        inertia: false,
        duration: { min: 0.1, max: 0.1 },
      },
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });
  }, []);
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="AboutCont w-[500vw] h-[100vh] flex flex-nowrap ">
        <section className="panel w-[100vw] flex">
          <AboutMe />
        </section>
        <section className="panel w-[100vw]">
          <Intro />
        </section>
        <section className="panel w-[100vw] h-[100vh] flex justify-center items-center">
          <MiddleIntro />
        </section>{" "}
        <section className="panel w-[100vw] h-[100vh] flex justify-center items-center">
          <EndIntro />
        </section>
      </div>
    </div>
  );
}
export default SubAbout;
