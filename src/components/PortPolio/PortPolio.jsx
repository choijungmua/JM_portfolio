// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  gsap 사용 익히기
// import the GSAP
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import the React
import { useEffect } from "react";
import { useRef } from "react";
import PortComp from "./PortComp";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function PortPolio() {
  useEffect(() => {
    gsap.from("#portMuflixText", {
      ease: "none",
      scale: 5,
      y: -100,
      opacity: 0,
      text: "ProJectProJect",
      duration: 0.5,
      color: "white",
      scrollTrigger: {
        trigger: ".home",
        scrub: 2,
        start: "top center",
        end: "top center",
        // markers: true,
      },
    });
  });

  const portPolioRightMove = () => {
    gsap.to("#conta", {
      x: () => +"-60vw",
    });
  };
  const portPolioLeftMove = () => {
    gsap.to("#conta", {
      x: "0vw",
    });
  };
  return (
    <section className="home h-[100vh] overflow-hidden text-white z-50 flex">
      <div className="flex flex-col items-center w-full ">
        <p
          id="portMuflixText"
          className="text-white opacity-1 mt-36 text-center font-nanum-square-neo-heavy text-4xl"
        >
          PORTPOLIO
        </p>
      </div>
    </section>
  );
}

export default PortPolio;
