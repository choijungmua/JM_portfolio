import gsap from "gsap";
import { useEffect } from "react";
function StyledComponentsCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center p-4 justify-center w-[50vw] lg:w-[70vw] sm:w-[100vw] md:w-[80vw] h-[60vh] flex overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/styledcomponents.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">styledcomponents</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>styledcomponents로 내가 원하는 스타일을 컴포넌트화가 가능합니다.</p>
        <p>
          HTML, CSS, JS 모두 컴포넌트까지 묶어 JS로만 개발이 가능하다는 장점이
          있습니다.
        </p>
        <p>JS가 들어간 부분은 StyledComponents로 묶고,</p>
        <p>디자인 적인 부분은 Tailwind로 빠르게 작업합니다.</p>
      </div>
    </div>
  );
}
export default StyledComponentsCardClick;
