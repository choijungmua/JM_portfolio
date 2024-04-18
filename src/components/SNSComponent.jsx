import { AiFillGithub } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";

function SNSComponents() {
  return (
    // {/* <BsInstagram size={25} /> */}
    <div className="flex gap-6 items-center justify-center">
      <span className="flex flex-col  items-center justify-center text-xs gap-1">
        <RxNotionLogo size={25} className="hover:size-8" />
        <p className="">Notion</p>
      </span>
      <span className="flex flex-col items-center justify-center text-xs gap-1">
        <AiFillGithub size={25} className="hover:size-8" />
        <p className=" ">GitHub</p>
      </span>
    </div>
  );
}
export default SNSComponents;
