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
  const container = useRef();

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".box-a",
        start: "919",
        end: "+=919",
        pin: true,
        markers: true,
      });
    },
    { scope: container }
  );

  return (
    <main
      className="home text-white h-[300vh] bg-gray-900 flex flex-col"
      ref={container}
    >
      <div className="box box-a w-full h-full flex" data-speed="0.5">
        a
      </div>
      <div className="box box-b w-full h-full flex" data-speed="0.8">
        b
      </div>
      <div className="flex box w-full box-c h-full" data-speed="1.2">
        c
      </div>
      <div className="line"></div>
    </main>
  );
}

export default PortPolio;
