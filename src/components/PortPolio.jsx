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
    // gsap.from("#portMuflixText", {
    //   ease: "none",
    //   scale: 20,
    //   y: 200,
    //   text: "ProJectProJect",
    //   duration: 0.5,
    //   color: "white",
    //   scrollTrigger: {
    //     trigger: ".home",
    //     scrub: 2,
    //     start: "top center",
    //     end: "top center",
    //     markers: true,
    //   },
    // });
    //   gsap.from(".PortSection1", {
    //     ease: "none",
    //     x: -3000,
    //     scrollTrigger: {
    //       trigger: ".PortSecCom",
    //       scrub: 5,
    //       start: "center bottom",
    //       end: "top bottom",
    //       markers: true,
    //     },
    //   });
  });
  return (
    <section className="home text-white z-10 flex">
      <div className="flex flex-col items-center w-full h-[100vh]">
        <div className="w-full  flex-col flex items-center justify-center">
          <div className=" w-full  flex flex-col justify-center z-10">
            <p
              id="portMuflixText"
              className="text-white mt-12 text-center font-nanum-square-neo-heavy text-4xl"
            >
              portfolio
            </p>
            <div className="PortSection1 mt-12  h-full font-nanum-square-neo-heavy text-3xl flex flex-col items-center ">
              <div className="gap-5 PortSecCom w-[80vw] flex h-full flex-col ">
                <p>SoloProject</p>
                <div className="bg-white w-[60vw] mx-auto h-[60vh]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortPolio;
