import gsap from "gsap";
import { useEffect } from "react";
function NextJsCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center p-4 justify-center w-[50vw] lg:w-[70vw] sm:w-[100vw] md:w-[80vw] h-[60vh] flex overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/next.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">Next</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>요즘 유행하는 React의 풀스택 프레임워크로</p>
        <p>서버사이드 렌더링으로 초기 로딩시간이 감소하는 장점을 가집니다. </p>
        <p>모든 페이지 요청에 HTML을 생성해야 하기 때문에</p>
        <p>클라이언트 사이드 렌더링보다는 서버 부하의 증가가 큽니다.</p>
        <p>하지만 검색엔진의 최적화로 CSR보다는 검색엔진이 쉽게 노출되므로,</p>
        <p>제가 공부하기에 배울점이 많은 매력적인 프레임워크입니다.</p>
      </div>
    </div>
  );
}
export default NextJsCardClick;
