import { atom } from "recoil";
const pageScroll = atom({
  key: "pageScroll", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default pageScroll;
