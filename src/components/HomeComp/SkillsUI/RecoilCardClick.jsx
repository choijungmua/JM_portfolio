import gsap from "gsap";
import { useEffect } from "react";
function RecoilCardClick() {
  return (
    <div className=" bg-white gap-2 rounded-3xl flex-col items-center justify-center w-[30vw] h-[60vh] flex p-4 overflow-hidden text-black">
      <div className="Hello">
        <div className="w-[100px]">
          <img src={require("../../../assets/Recoil.png")} alt="" />
        </div>
        <p className="font-nanum-square-neo-Bold mb-2 ">Recoil</p>
        <div className="border-b-2 border-gray-500 w-[20vw]"></div>
        <p>atom과 selecter를 사용하여 전역 상태를 관리 하여,</p>
        <p>가독성과 유지보수성을 늘릴 수 있습니다.</p>
        <p>Recoil의 비동기 처리를 간단하게 구현 할 수 있습니다.</p>
      </div>
    </div>
  );
}
export default RecoilCardClick;
