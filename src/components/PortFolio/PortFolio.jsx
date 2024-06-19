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
import Captain from "../../assets/captain.jpg";
import BlackJava from "../../assets/blackjava.jpg";
import PortClick from "./PortClick";
import PortJavaWeb from "./PortJavaWeb";
import PortPort from "./PortPort";
import gsap from "gsap";

function PortFolio() {
  useEffect(() => {
    // Animate the PORTPOLIO text
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

    // Animate each PortCanvas section
    gsap.utils.toArray(".PortCanvas").forEach((canvas) => {
      gsap.fromTo(
        canvas,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: canvas,
            scrub: 2,
            start: "top center",
            end: "center 70%",
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="home text-white z-50 flex">
      <div className="flex overflow-hidden flex-col items-center w-full">
        <p
          id="portMuflixText"
          className="text-white opacity-1 mt-36 text-center font-nanum-square-neo-heavy text-4xl"
        >
          PORTFOLIO
        </p>
        <div className="flex-col w-[80vw] flex p-2 gap-2">
          {/* 자바 웹 */}
          <div className="PortCanvas javaWeb opacity-0 w-full h-full z-10">
            <PortJavaWeb />
          </div>
          {/* 클릭픽 */}
          <div className="PortCanvas opacity-0 w-full h-full z-10">
            <PortClick />
          </div>
          {/* 영화 추천 사이트 */}
          <div className="PortCanvas opacity-0 w-full h-full z-10">
            <PortMovie />
          </div>
          {/* 포트폴리오 */}
          <div className="PortCanvas opacity-0 w-full h-full z-10">
            <PortPort />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortFolio;
