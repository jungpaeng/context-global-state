import * as React from "react";
import { useGlobalState } from "../context/count";

const Counter = () => {
  const [value, update] = useGlobalState("count");
  return (
    <div>
      <span>Count: {value}</span>
      <button onClick={() => update(curr => curr + 1)}> + 1 </button>
      <button onClick={() => update(curr => curr - 1)}> - 1 </button>
    </div>
  );
};

export default Counter;
