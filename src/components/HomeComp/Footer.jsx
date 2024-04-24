// // copyright - Choi Jung mu
// // 2024-04-25 Update
// //  업데이트 내용
// //  gsap로 Footer 꾸미기

// import { useEffect } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(useGSAP, ScrollTrigger);

// function Footer() {
//   let text = ".aboutText";
//   let splitText = text.innerText;
//   let splitWrap = splitText.split("").join("</span><span>");
//   text.innerHTML = splitWrap = "<span>" + splitWrap + "</span>";
//   document.querySelectorAll(".aboutText").forEach((text) => {
//     let theText = text.innerText;
//     let newText = "";

//     for (let i = 0; i < text.innerText.length; i++) {
//       newText += "<span aria-hidden='true'>";
//       if (text.innerText[i] == " ") {
//         newText += " ";
//       } else {
//         newText += text.innerText[i];
//       }
//       newText += "</span>";
//     }
//     text.innerHTML = newText;
//     text.setAttribute("aria-label", theText);
//   });
//   useGSAP(() => {}, []);
//   return (
//     <div className="">
//       <p className="aboutText">About Me</p>
//     </div>
//   );
// }
// export default Footer;
