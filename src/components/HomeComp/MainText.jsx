// copyright - Choi Jung mu
// 2024-04-24 Update
//  업데이트 내용
//  gsap로 Main 페이지 꾸미기

// import the React
import { useEffect } from "react";
// import The gsap Animation
import { gsap } from "gsap";
import react from "../../assets/react.gif";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function MainText() {
  // timeline
  const mainTextTimeLine = gsap.timeline();
  useEffect(() => {
    gsap.to(".reactImg", {
      scale: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".mainCont",
        start: "top top",
        end: "bottom center",
        duration: 1,
        scrub: 1,
        // markers: true,
      },
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Hello:)",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "안녕하세요",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Bonjour",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Hola",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "こんにちは",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "你好",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Hallo ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Ciao  ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Olá  ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Привет  ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Guten Tag ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Ahoj ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Hej ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 0.5,
      delay: 0.5,
      text: "Tere ",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 1,
      delay: 1,
      text: "",
    });
    mainTextTimeLine.to(".MainTextHello", {
      duration: 1,
      text: "개발 세계로 떠나시겠습니까?",
    });
    mainTextTimeLine.to(".mainTextChoice", {
      delay: 1,
      duration: 1,
      opacity: 1,
    });
  }, []);
  const scrollDownYes = () => {
    gsap.to(window, { duration: 2, scrollTo: ".yesClickScrollMove" });
  };
  const scrollDownNo = () => {
    mainTextTimeLine.to(".MainTextHello", {
      duration: 1,
      delay: 1,
      text: "안돼요 떠나세요.",
    });
    mainTextTimeLine.to(window, {
      duration: 2,
      delay: 1,
      scrollTo: ".yesClickScrollMove",
    });
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center overflow-hidden">
      <div className="mainCont w-[60vw] flex justify-center h-[100vh]">
        <div className="flex w-full justify-center">
          <div className=" gap-12 w-full h-full flex-col flex justify-center items-center font-nanum-square-neo-heavy sm:text-2xl text-6xl">
            <div className="">
              <img
                src={react}
                alt=""
                className="reactImg flex w-[100px] h-[100px]"
              />
            </div>
            <p className="MainTextHello whitespace-nowrap"></p>
            <div className=" mt-4 mainTextChoice opacity-0">
              <div className="gap-12 font-nanum-square-neo-ExtraBold flex">
                <p onClick={scrollDownYes} className="text-red-600">
                  Yes
                </p>
                <p onClick={scrollDownNo} className="text-blue-600">
                  No
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainText;
