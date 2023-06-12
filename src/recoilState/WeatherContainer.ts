import { atom } from "recoil";

const weatherContainerVisibilityState = atom<boolean>({
  key: "weatherContainerVisibility",
  default: true,
});

export default weatherContainerVisibilityState;
