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
        markers: true,
      },
    });
  });

  return (
    <section className="home text-white h-[100vh] bg-black flex">
      <div className="flex flex-col w-full h-full">
        <div className="mb-24">
          <p
            id="portSection1"
            className="text-black text-center font-nanum-square-neo-heavy text-3xl"
          >
            PortPolo
          </p>
        </div>
        <div className="w-full flex justify-center">
          <p id="portMainText" className="text-2xl">
            SoloProJect
          </p>
        </div>
      </div>
    </section>
  );
}

export default PortPolio;
