import { atom } from "recoil";

const cloudLoaderVisibilityState = atom<boolean>({
  key: "cloudLoaderVisibility",
  default: false,
});

export default cloudLoaderVisibilityState;
