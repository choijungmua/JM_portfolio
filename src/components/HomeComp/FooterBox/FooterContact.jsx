import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
function FooterContact() {
  return (
    <div className="w-full relative ">
      {/* 연락처 */}
      <div className="CallMeFooter5 w-full flex justify-center">
        <div className="border-b-2 pb-4 w-full justify-center flex text-left border-dashed">
          <div className="">
            <p className="text-center  font-nanum-square-neo-Bold text-lg ">
              연락 망
            </p>
            <div className="border-b-2 my-2 border opacity-70"></div>
            <div className="flex mb-4 justify-center gap-2">
              <a href="https://github.com/choijungmua">
                <FaGithub size={24} />
              </a>
              <a href="https://cloudmaxstory.tistory.com/">
                <FaBlog size={24} />
              </a>
            </div>
            <p className="">이름 : 최정무</p>
            <p className="">연락 : 010-3948-1599</p>
            <p className="">메일 : chlwjd022@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterContact;
