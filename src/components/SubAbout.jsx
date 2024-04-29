// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Vane from "../assets/Vane.png";
import AboutMe from "./AboutMe";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function SubAbout() {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -300 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".AboutCont",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".AboutCont").offsetWidth,
      },
    });
  }, []);

  return (
    <div class="AboutCont w-[300vw] h-[100vh] flex flex-nowrap">
      <section class="panel w-[100vw] flex">
        <AboutMe />
      </section>
      <section class="panel bg-red-400 w-[100vw]">TWO</section>
      <section class="panel bg-white w-[100vw]">THREE</section>
    </div>
  );
}
export default SubAbout;
