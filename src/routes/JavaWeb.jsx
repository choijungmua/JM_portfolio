import gsap from "gsap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
function JavaWeb() {
  useEffect(() => {
    gsap.fromTo(".JavaWebPage", { opacity: 1 }, { opacity: 0, duration: 4 });
  }, []);
  return (
    <>
      {/* <div className="JavaWebPage absolute w-[100vw] h-[100vh] bg-black" /> */}
      <div className="w-[100vw] h-[100vh] flex justify-center">
        <div className="w-[60vw] h-[100vh] border-x-2 border-dashed border-black ">
          <div className="bg-slate-200 p-2 w-full flex">
            <div className="absolute ">
              <AiOutlineArrowLeft size={24} />
            </div>
            <div className="w-full justify-center flex items-center">
              <p className="font-nanum-square-neo-Bold">JavaScript Web</p>
            </div>
          </div>
          <div className="w-full h-full p-8">
            <p>투두리스트 및 다양한 기능을 가진 바닐라 웹 </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default JavaWeb;
