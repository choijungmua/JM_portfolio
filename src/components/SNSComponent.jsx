import { AiFillGithub } from "react-icons/ai";
import { FaBlog } from "react-icons/fa6";

function SNSComponents() {
  return (
    <div className="flex gap-6 items-center justify-center">
      {/* 깃허브 */}
      <a
        href="https://github.com/choijungmua"
        className="flex flex-col items-center justify-center text-xs gap-1"
      >
        <AiFillGithub size={25} className="hover:size-8" />
        <p className=" ">GitHub</p>
      </a>
      {/* 블로그 */}
      <a
        href="https://cloudmaxstory.tistory.com/"
        className="flex flex-col  items-center justify-center text-xs gap-1"
      >
        <FaBlog size={25} className="hover:size-8" />
        <p className="">Blog</p>
      </a>
    </div>
  );
}
export default SNSComponents;
