// atoms/gientCard.js

import { atom } from "recoil";

const gientCard = atom({
  key: "gientCard", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
const cardMainText = atom({
  key: "cardMainText", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
const cardIcon = atom({
  key: "cardIcon", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
const cardExplain = atom({
  key: "cardExplain", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
const cardSubText = atom({
  key: "cardMainText", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export default gientCard;
