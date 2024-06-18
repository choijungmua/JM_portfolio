import gsap from "gsap";
import { useEffect } from "react";
function ReactCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center p-4 justify-center w-[50vw] lg:w-[70vw] sm:w-[100vw] md:w-[80vw] h-[60vh] flex overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/React.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">React</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>
          React의 기본적인{" "}
          <span className="font-nanum-square-neo-Bold">Hook </span>들을 사용 할
          수 있습니다.
        </p>
        <p>React의 프레임워크및 라이브러리를 활용 할 수 있습니다.</p>
        <p>React Native로 모바일 환경도 해보고 싶습니다.</p>
      </div>
    </div>
  );
}
export default ReactCardClick;
