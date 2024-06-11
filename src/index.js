import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
