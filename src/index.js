import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
gsap.registerPlugin(ScrollTrigger);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
