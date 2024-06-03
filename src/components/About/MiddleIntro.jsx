import Profile from "../../assets/Profile.jpg";
import gsap from "gsap";
import { useEffect } from "react";
// Register ScrollTrigger plugin

function MiddleIntro() {
  useEffect(() => {
    gsap.from("#profileImg", {
      ease: "none",
      y: -1000,
      scrollTrigger: {
        trigger: "#profileCont",
        scrub: 3,
        start: "bottom center",
        end: "bottom center",
        // markers: true,
      },
    });
  }, []);
  const Passion = () => {
    gsap.to("", {});
  };
  return (
    <>
      <div id="profileCont" className=" flex items-center justify-center">
        <img src={Profile} alt="" id="profileImg" />
      </div>
      <div
        id="EndIntroCont"
        className="w-full h-full whitespace-nowrap text-center flex justify-center items-center font-nanum-square-neo-Bold text-2xl flex-col"
      >
        <p>안녕하세요 프론트엔드 신입 개발자 최정무입니다.</p>
        <p>저의 키워드는 3가지로 나눌 수 있습니다.</p>

        <div className="flex gap-4 font-nanum-square-neo-Bold">
          <p onClick={Passion} className="text-green-400">
            열정
          </p>
          <p className="text-red-400">노력</p>
          <p className="text-blue-400">배움</p>
        </div>
      </div>
    </>
  );
}

export default MiddleIntro;
