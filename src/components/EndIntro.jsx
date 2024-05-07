import Profile from "../assets/Profile.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";
// Register ScrollTrigger plugin

function EndIntro() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to("#fighting", {
      x: 2000,
      scale: 100,
      scrollTrigger: {
        trigger: "#EndIntroCont",
        scrub: true,
        start: "center center",
        end: "bottom top",
      },
      ease: "none", // easing 효과 없음
    });
  }, []);
  const Passion = () => {
    gsap.to("", {});
  };
  return (
    <>
      <div className="w-1/2 flex items-center justify-center">
        <img src={Profile} alt="" className="" />
      </div>
      <div
        id="EndIntroCont"
        className="w-full h-full text-center flex justify-center items-center font-nanum-square-neo-Bold text-2xl flex-col"
      >
        <p>안녕하세요</p>
        <p>저의 키워드는 3가지로 나눌 수 있습니다.</p>
        <div className="flex gap-4 font-nanum-square-neo-Bold">
          <p onClick={Passion} className="text-green-400">
            열정
          </p>
          <p className="text-red-400">노력</p>
          <p className="text-blue-400">배움</p>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default EndIntro;
