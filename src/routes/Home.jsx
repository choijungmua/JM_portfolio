import Profile from "../assets/Profile.jpg";
import BGIMG from "../assets/bgImg.jpg";
import HomeTopIntro from "../components/HomeTopIntro";
import Navigation from "../components/Navigation";
import { useEffect, useRef } from "react";
function Home() {
  // 페이지 전환
  const handleWheel = useRef();
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
          //     top: pageHeight * 2,
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
    // 사진 꾸미기
    <div ref={handleWheel} className="overflow-y-auto h-screen">
      <div className="flex bg-red-300 h-screen">
        <HomeTopIntro />
      </div>
      <Navigation />
      <div className="w-full flex justify-between h-full py-20">
        <div className="w-1/2 h-full -z-1">
          <div className="justify-center mx-auto relative items-center flex w-full h-full">
            <img src={BGIMG} className="w-full h-full flex z-[-50]" />
            <div className="absolute">
              {/* <div className="bg-white rounded-md right-0 top-10 text-right p-3 whitespace-nowrap">
                <p>일찍 일어나는 새가</p>
                <p>빨리 지치고 빨리 잡아먹힌다!!</p>
              </div> */}
              <img src={Profile} className="rounded-lg w-5/6 h-auto" />
            </div>
          </div>
        </div>
        <div className="flex  text-white w-1/2 h-full right-0 bg-black z-10 items-center justify-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl pb-3">안녕하세요</h2>
            <p className="font-semibold">
              저는 프론트엔드 디벨로퍼에 도전하는{" "}
            </p>
            <p className="font-semibold">
              꿈을 찾아 나아가는 인재 최정무입니다.
            </p>
            <p className="font-semibold">
              다음에 뭐 쓸지 생각해 오는 것을 숙제로 잡자
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
