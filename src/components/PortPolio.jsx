// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  gsap 사용 익히기
// import the GSAP
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
      scale: 20,
      y: 400,
      text: "ProJectProJect",
      duration: 0.5,
      color: "white",
      scrollTrigger: {
        trigger: "#muflixCont",
        scrub: 2,
        start: "top bottom",
        end: "center bottom",
        markers: true,
      },
    });
    gsap.from(".PortSection1", {
      ease: "none",
      x: -400,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".PortSecCom",
        scrub: 2,
        start: "center bottom",
        end: "center bottom",
        markers: true,
      },
    });
  });

  return (
    <section className="home text-white z-10 flex">
      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full  flex-col flex items-center justify-center">
          <div className="w-full flex justify-center z-10">
            <p
              id="portMuflixText"
              className="text-white font-nanum-square-neo-heavy text-4xl absolute"
            >
              portfolio
            </p>
            <div className="PortSecCom w-full flex h-full bg-red-100 items-center ">
              <div className="PortSection1 ml-24 mt-72">
                <PortComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortPolio;
