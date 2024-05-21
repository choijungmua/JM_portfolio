import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import gsap from "gsap";

const PortPolioContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const moveSlide = (index) => {
    const offset = -60 * index;
    gsap.to("#conta", {
      x: `${offset}vw`,
    });
  };

  const handleLeftMove = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      moveSlide(newIndex);
    }
  };

  const handleRightMove = () => {
    if (currentIndex < 2) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      moveSlide(newIndex);
    }
  };
  const handleDoubleRightMove = () => {
    if (currentIndex < 2) {
      const newIndex = Math.min(currentIndex + 2, 2); // 두 칸 오른쪽 이동, 최대 인덱스 2
      setCurrentIndex(newIndex);
      moveSlide(newIndex);
    }
  };
  const handleCenterMove = () => {
    const newIndex = currentIndex;
    setCurrentIndex(1);
    moveSlide(newIndex);
  };
  const handleDoubleLeftMove = () => {
    if (currentIndex > 0) {
      const newIndex = Math.max(currentIndex - 2, 0); // 두 칸 왼쪽 이동, 최소 인덱스 0
      setCurrentIndex(newIndex);
      moveSlide(newIndex);
    }
  };
  return (
    <>
      <div className="flex items-center gap-3">
        <FaAngleDoubleLeft onClick={handleDoubleLeftMove} size={24} />
        <FaAngleLeft onClick={handleLeftMove} size={24} />
        <div className="w-[60vw] h-[60vh] overflow-hidden bg-black">
          <div id="conta" className="ml-0 w-[180vw] flex h-[60vh]">
            <div className="flex-1 h-full bg-red-400"></div>
            <div className="flex-1 h-full bg-blue-400"></div>
            <div className="flex-1 h-full bg-green-400"></div>
          </div>
        </div>
        <FaAngleRight onClick={handleRightMove} size={24} />
        <FaAngleDoubleRight onClick={handleDoubleRightMove} size={24} />
      </div>
      <div className="w-[60vw] gap-2 mt-2 flex ">
        <div
          onClick={handleDoubleLeftMove}
          className="flex-1 border-4 flex rounded-full"
        ></div>
        <div
          onClick={handleCenterMove}
          className="flex-1 border-4 flex rounded-full"
        ></div>
        <div
          onClick={handleDoubleRightMove}
          className="flex-1 border-4 flex rounded-full"
        ></div>
      </div>
    </>
  );
};

export default PortPolioContainer;
