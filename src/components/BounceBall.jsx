// import React, { useEffect, useState } from "react";
// import styled, { keyframes } from "styled-components";

// // 이미지 임포트
// import Next from "../assets/next.png";
// import Javascript from "../assets/javascript.png";
// import ReactImg from "../assets/React.png";
// import Recoil from "../assets/Recoil.png";
// import Sass from "../assets/sass.png";
// import Styled from "../assets/styledcomponents.png";
// import Tailwind from "../assets/tailwind.png";
// import HTML5 from "../assets/HTML.png";
// import CSS3 from "../assets/CSS.png";

// function BounceBall() {
//   const [balls, setBalls] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const initialBalls = [];
//     for (let i = 0; i < 10; i++) {
//       initialBalls.push({
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//       });
//     }
//     setBalls(initialBalls);
//     return () => {};
//   }, []);

//   const move = keyframes`
//     0% { transform: translate(0, calc(100vw - 25px)); }
//     100% { transform: translate(0,calc(-100vw)); }
//   `;

//   const Div = styled.div`
//     position: absolute;
//     width: 100px;
//     height: 100px;
//     background-size: cover;
//     animation: ${move} 10s linear;
//   `;

//   return (
//     <div className="h-screen absolute">
//       {balls.map((ball, index) => {
//         return (
//           <Div
//             key={index}
//             style={{
//               left: ball.x,
//               bottom: ball.y,
//               backgroundImage: `url(${CSS3})`, // 랜덤한 이미지 할당
//               transform: `scale(${ball.directionX}, ${ball.directionY})`, // 방향에 따라 공의 이미지를 반전시킵니다.
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default BounceBall;
