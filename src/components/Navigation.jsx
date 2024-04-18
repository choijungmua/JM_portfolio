import MainLogo from "../assets/MainLogo.png";
import { AiOutlineHome } from "react-icons/ai";
import { SlUser } from "react-icons/sl";
import { SlFolderAlt } from "react-icons/sl";
function Navigation() {
  return (
    // 사이드바
    <div className="absolute flex right-0 flex-col gap-5">
      <div className="bg-white p-1 rounded-lg">
        <AiOutlineHome size={20} />
      </div>
      <div className="bg-white p-1 rounded-lg">
        <SlUser size={20} />
      </div>
      <div className="bg-white p-1 rounded-lg">
        <SlFolderAlt size={20} />
      </div>
    </div>
  );
}
export default Navigation;
