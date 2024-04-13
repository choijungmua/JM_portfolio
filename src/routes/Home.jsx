import HomeTopIntro from "../components/HomeTopIntro";
import Navigation from "../components/Navigation";
import { useEffect, useRef, useState } from "react";
import React from "react";
import DesignedBy from ".././components/DesignedBy";
import HomeBottomIntro from "../components/HomeBottomIntro";
import { useRecoilValue } from "recoil";
import mouseHover from "../atoms/mouseHover";

function Home() {
  const mouseHovered = useRecoilValue(mouseHover);

  // 페이지 전환
  const [xy, setxy] = useState({ x: 0, y: 0 });
  const handleWheel = useRef();
  const mouseHandler = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setxy({ x: mouseX, y: mouseY });
  };
  useEffect(() => {
    const wheelChangeHandler = (e) => {
      e.preventDefault();
      const { scrollTop } = handleWheel.current;
      const pageHeight = window.innerHeight;
      const { deltaY } = e;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          handleWheel.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          // } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //   console.log("현재 2페이지, down");
          //   handleWheel.current.scrollTo({
          //     top : pageHeight * 2,
          //     left: 0,
          //     behavior: "smooth",
          //   });
        }
      } else {
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, up");
          handleWheel.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, up");
          handleWheel.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const currentRef = handleWheel.current;
    currentRef.addEventListener("wheel", wheelChangeHandler);

    // 이벤트 리스너 해제
    return () => {
      currentRef.removeEventListener("wheel", wheelChangeHandler);
    };
  }, []);
  return (
    // 마우스 스크롤시 파워무브
    <div
      ref={handleWheel}
      className="overflow-y-auto h-screen cursor-none pointer-events-auto"
      onMouseMove={mouseHandler}
    >
      {/* 마우스 휠  */}
      <div
        className={`absolute  z-[-1] bg-[#00B894] ${
          mouseHovered
            ? "opacity-50  w-[100px] h-[100px] left-[-50px] top-[-50px] border-[5px] border-black"
            : "opacity0"
        }  left-[-15px] 
        top-[-15px] rounded-full w-[30px] h-[30px]`}
        style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
      />
      {/* 1section */}
      <div className="flex flex-col">
        <HomeTopIntro />
        {/* Navigation */}
        <div className="mt-[-104px]">
          <Navigation />
        </div>
      </div>
      {/* 2section */}
      <HomeBottomIntro />
      {/* Designed By */}
      <DesignedBy />
      {/* Skills */}
    </div>
  );
}
export default Home;
