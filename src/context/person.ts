import { createStore } from "../hooks/useGlobalStete";

type Action =
  | { type: "setFirstName"; firstName: string }
  | { type: "setLastName"; lastName: string }
  | { type: "setAge"; age: number };

const INITAL_STATE = {
  person: { age: 0, firstName: "", lastName: "" }
};

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
  (state, action: Action) => {
    switch (action.type) {
      case "setFirstName":
        return {
          ...state,
          person: { ...state.person, firstName: action.firstName }
        };
      case "setLastName":
        return {
          ...state,
          person: { ...state.person, lastName: action.lastName }
        };
      case "setAge":
        return {
          ...state,
          person: { ...state.person, age: action.age }
        };
      default:
        return state;
    }
  },
  INITAL_STATE
);
