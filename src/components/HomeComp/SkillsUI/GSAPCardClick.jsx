import gsap from "gsap";
import { useEffect } from "react";
function GSAPCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center justify-center w-[30vw] h-[60vh] flex p-4 overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/gsap.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">GSAP</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>GSAP는 애니메이션 라이브러리입니다.</p>
        <p>
          스크롤, 텍스트, 동작등 여러가지 애니메이션을 보다 쉽게 구현 할 수
          있으며,
        </p>
        <p>지금 보고계신 포트폴리오 웹에 가장 많이 사용된 애니메이션입니다.</p>
        <p>공식 문서를 보고 공부하였지만 정말 매력적인 라이브러리입니다.</p>
      </div>
    </div>
  );
}
export default GSAPCardClick;
