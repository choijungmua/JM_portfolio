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
import PortMovie from "./PortMovie";
// import the React
import { useEffect } from "react";
import { useRef } from "react";
import PortComp from "./PortComp";
import Captain from "../../assets/captain.jpg";
import BlackJava from "../../assets/blackjava.jpg";
import PortClick from "./PortClick";
import PortJavaWeb from "./PortJavaWeb";
import PortPort from "./PortPort";

function PortPolio() {
  // useEffect(() => {
  //   gsap.from("#portMuflixText", {
  //     ease: "none",
  //     scale: 5,
  //     y: -100,
  //     opacity: 0,
  //     text: "ProJectProJect",
  //     duration: 0.5,
  //     color: "white",
  //     scrollTrigger: {
  //       trigger: ".home",
  //       scrub: 2,
  //       start: "top center",
  //       end: "top center",
  //       // markers: true,
  //     },
  //   });
  //   gsap.to("#topProject", {
  //     ease: "none",
  //     opacity: 1,
  //     duration: 3,
  //     scrollTrigger: {
  //       trigger: "#topProject",
  //       scrub: 3,
  //       start: "top center",
  //       end: "30% center",
  //       // markers: true,
  //     },
  //   });
  //   gsap.to("#bottomProject", {
  //     ease: "none",
  //     opacity: 1,
  //     duration: 3,
  //     scrollTrigger: {
  //       trigger: "#bottomProject",
  //       scrub: 3,
  //       start: "top center",
  //       end: "30% center",
  //       // markers: true,
  //     },
  //   });
  // });

  // const portPolioRightMove = () => {
  //   gsap.to("#conta", {
  //     x: () => +"-60vw",
  //   });
  // };
  // const portPolioLeftMove = () => {
  //   gsap.to("#conta", {
  //     x: "0vw",
  //   });
  // };

  return (
    <section className="home text-white z-50 flex">
      <div className="flex overflow-hidden flex-col items-center w-full ">
        <p
          id="portMuflixText"
          className="text-white opacity-1 mt-36 text-center font-nanum-square-neo-heavy text-4xl"
        >
          PORTPOLIO
        </p>
        <div className="flex-col w-[80vw] flex p-2 gap-2">
          {/* 자바 웹 */}
          <div className="w-full h-full z-10">
            <PortJavaWeb />
          </div>
          {/* 클릭픽 */}
          <div className="w-full h-full z-10">
            <PortClick />
          </div>
          {/* 영화 추천 사이트 */}
          <div className="w-full h-full z-10">
            <PortMovie />
          </div>
          {/* 포트폴리오 */}
          <div className="w-full h-full z-10">
            <PortPort />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortPolio;
