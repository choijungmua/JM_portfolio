import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function FooterEmail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_serviceId,
        process.env.REACT_APP_templete,
        form.current,
        process.env.REACT_APP_publicKey
      )
      .then(
        (result) => {
          alert("성공적으로 이메일이 전송되었습니다.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
  };
  return (
    <div className=" w-full h-full flex justify-center items-center flex-col">
      {/* FORM */}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label>이름</label>
        <input
          type="text"
          name="user_name"
          placeholder="이름을 입력하세요."
          className="text-black rounded-lg px-2  mb-3"
        />
        <label>이메일</label>
        <input
          type="email"
          name="user_email"
          placeholder="이메일을 입력하세요."
          className="text-black rounded-lg px-2 mb-3 "
        />
        <label>메세지</label>
        <input name="message" className="text-black rounded-lg px-2  mb-3" />
        <input
          type="submit"
          value="Send"
          placeholder="메세지를 입력하세요."
          className="text-black rounded-lg px-2 "
        />
        <button type="submit" className="text-white" value="문의하기">
          전송
        </button>
      </form>
    </div>
  );
}
export default FooterEmail;
