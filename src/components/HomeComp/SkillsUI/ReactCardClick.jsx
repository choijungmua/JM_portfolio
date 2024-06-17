import gsap from "gsap";
import { useEffect } from "react";
function ReactCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center justify-center w-[30vw] h-[60vh] flex p-4 overflow-hidden text-black">
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
        <div className="flex justify-end w-full pr-10 mt-4">
          <div className="w-[50px] flex gap-5 items-center">
            <img src={require("../../../assets/Recoil.png")} alt="" />
            <img src={require("../../../assets/next.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReactCardClick;
