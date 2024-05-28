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
import Captain from "../../assets/captain.jpg";
import BlackJava from "../../assets/blackjava.jpg";
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
    <section className="home h-[100vh] text-white z-50 flex">
      <div className="flex flex-col items-center w-full ">
        <p
          id="portMuflixText"
          className="text-white opacity-1 mt-36 text-center font-nanum-square-neo-heavy text-4xl"
        >
          PORTPOLIO
        </p>
        <div className="w-full h-[100vh] bg-white">
          <div className="w-full h-[70vh] flex p-2 gap-2">
            <div className="w-1/2 h-full bg-black z-10">
              <div className="w-[90%] mx-auto">
                <img src={Captain} alt="" className="" />
              </div>
              <div className="text-center">
                <p className="font-nanum-square-neo-Bold text-xl">
                  영화 평점 및 추천 사이트
                </p>
                <button className="mt-2 bg-blue-700 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
                  보러가기
                </button>
              </div>
            </div>

            <div className="w-1/2 h-full bg-black z-10 relative">
              <div className="absolute flex w-full h-full justify-end items-center flex-col">
                <div className="font-nanum-square-neo-heavy text-xl">
                  투두리스트 및 색다른 기능구현
                </div>
                <button className="mt-2 mb-12 bg-blue-700 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
                  보러가기
                </button>
              </div>
              <div className="flex w-full h-full justify-center items-center">
                <div className="w-[50%]">
                  <img src={BlackJava} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[70vh] flex p-2 pt-0 gap-2">
            <div className="w-1/2 h-full bg-black z-10">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <p>CLICK 한번으로 여행지를 PICK</p>
                <button className="mt-2 bg-blue-700 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
                  보러가기
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full bg-black z-10">개설예정</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortPolio;
