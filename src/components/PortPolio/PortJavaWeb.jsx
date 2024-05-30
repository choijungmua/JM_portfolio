import { BsPerson } from "react-icons/bs";
import blackjava from "../../assets/blackjava.jpg";
function PortJavaWeb() {
  return (
    <section id="topProject" className="w-full h-full z-10">
      <div className="border-t-2 border-dashed opacity-70 my-4" />
      <div className="mt-12 text-center">
        {/* 큰 제목 */}
        <p className="font-nanum-square-neo-bold text-xl">
          - 투두리스트 및 다양한 기능을 가진 바닐라 웹 -
        </p>
        {/* 소제목 및 설명 */}
        <p className="opacity-70 mt-4">투두리스트 및 다양한 바닐라 자바 웹</p>
        {/* 이미지 */}
        <div className=" w-full flex h-[50vh] my-4">
          <div className="  flex flex-1 justify-center">
            <div className="bg-white w-1/2 h-full"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-2/3 gap-5 flex text-left flex-col">
              <div className="w-full flex justify-center items-center">
                <div className="w-1/3">
                  <img src={blackjava} alt="" />
                </div>
              </div>
              {/* 목표 */}
              <p>
                저를 처음으로 개발의 매력을 빠지게 한 자바스크립트 웹입니다.
              </p>
              <p>
                HTML과 CSS JAVASCRIPT 세 동작을 이루어 만들어 냈으며, fetch를
                이용하여 현재 위치의 날씨정보를 얻어 올 수 있었으며, 새로고침 할
                때마다 랜덤으로 바뀌는 배경화면과, 명언들이 바뀌며 투두리스트를
                구현하였습니다.
              </p>
              <div className="border opacity-70"></div>
              <div className="flex-col opacity-70 flex text-end">
                <p>제작기간 : 1개월</p>
                <p>2024-02</p>
              </div>
            </div>
          </div>
        </div>
        {/* Stack */}
        <div className="w-full">
          <div className="w-full flex justify-end gap-1">
            <div className="rounded-full  border px-2 flex items-center">
              <p>HTML</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>CSS</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>JAVASCRIPT</p>
            </div>
          </div>

          <div className="flex absolute">
            <div>
              <div className="flex justify-center items-center gap-2">
                <p>인원수 : </p>
                <div className="flex">
                  <BsPerson size={24} />
                </div>
              </div>
              <div className="mt-4 opacity-70 flex justify-center items-center">
                <BsPerson size={18} />
                <p className="text-sm font-nanum-square-neo-Light">
                  아이콘의 개수당 인원수를 의미합니다.
                </p>
              </div>
            </div>
          </div>
          {/* Read Me */}
          <div className="w-full h-full items-center flex justify-end pr-12">
            <button className=" opacity-70 my-2 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
              Read Me.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortJavaWeb;
