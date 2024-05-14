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
import Imac from "../assets/Imac.jpg";
import Iphone from "../assets/Iphone.png";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function PortPolio() {
  useEffect(() => {
    gsap.to("#portSection1", {
      ease: "none",
      x: 200,
      width: 200,
      rotate: 720,
      duration: 0.2,
      color: "white",
      scrollTrigger: {
        trigger: ".home",
        scrub: 1,
        start: "20% bottom",
        end: "top bottom",
      },
    });
    gsap.from("#portMainText", {
      ease: "none",
      opacity: 0,
      y: 100,
      color: "white",
      scrollTrigger: {
        trigger: ".home",
        scrub: 1,
        start: "center bottom",
        end: "top bottom",
      },
    });
    gsap.to("#portMuflixCont", {
      ease: "none",
      x: 200,
      width: 200,
      rotate: 720,
      duration: 0.2,
      color: "white",
      scrollTrigger: {
        trigger: "#muflixCont",
        scrub: 1,
        start: "center bottom",
        end: "top bottom",
        markers: true,
      },
    });
  });

  return (
    <section className="home text-white z-10 bg-black flex">
      <div className="flex flex-col w-full h-full">
        <div className="mb-8">
          <p
            id="portSection1"
            className="text-black text-center font-nanum-square-neo-heavy text-3xl"
          >
            PortPolo
          </p>
        </div>
        <div className="w-full  flex-col flex items-center justify-center">
          <div className="w-full z-10">
            <p
              id="portMuflixCont"
              className="text-red-500 font-nanum-square-neo-heavy text-4xl mt-24 absolute"
            >
              SoloProJect
            </p>
            <div
              id="muflixCont"
              className="w-full flex-col bg-red-500 h-[100vh] flex justify-center items-center"
            >
              <img src={Imac} alt="" />
            </div>
            {/* <img src={Iphone} alt="" /> */}
          </div>
          <div className="w-full flex-col z-10 bg-sky-200 h-[100vh] flex justify-center items-center">
            <p id="portMainText" className="text-2xl">
              SoloProJect
            </p>
            <img src={Imac} alt="" />
            {/* <img src={Iphone} alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortPolio;
