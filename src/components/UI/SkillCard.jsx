import "./../Styles/Animation.scss";
import { useState } from "react";
import { useRecoilState } from "recoil";
import gientCard from "../../atoms/gientCard";
import cardMainText from "../../atoms/gientCard";
function SkillCard({ MainText, SubText, Icon, Explain }) {
  const [Card, setCard] = useRecoilState(gientCard);
  const [mainText, setMainText] = useRecoilState(cardMainText);
  const cardClick = () => {
    setCard((card) => !card);
    setMainText(MainText);
  };
  return (
    <div className=" cardContainer sm:w-[100px] sm:h-[125px] w-[150px] h-[200px] flex flex-start text-center text-black">
      <div onClick={cardClick} className="item w-full h-full rounded-3xl  ">
        <div className="front w-full h-full  rounded-3xl text-center flex flex-col items-center justify-center bg-white text-black">
          <div className="w-full h-auto flex flex-col items-center justify-center">
            <img src={Icon} alt="Icon" className="w-1/2" />
            <p className="font-nanum-square-neo-ExtraBold">{MainText}</p>
          </div>
        </div>
        <div className="back w-full h-full rounded-3xl bg-white ">
          <div className="w-full h-full flex justify-center">
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <img src={Icon} alt="Icon" className="w-1/2" />
            </div>
          </div>
          {/* <p>{Explain}</p>
          <div className="h-1/2 mx-2 border-2 rounded-3xl border-black flex items-center justify-center">
            <p>{SubText}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default SkillCard;
