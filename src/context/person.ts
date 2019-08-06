import { createGlobalState } from "../hooks/useGlobalStete";

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  firstName: "",
  lastName: ""
});
