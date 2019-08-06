import * as React from "react";
import Counter from "./Counter";
import Person from "./Person";
import { GlobalStateProvider as CountStateProvier } from "../context/count";
import { GlobalStateProvider as PersonStateProvier } from "../context/person";

const App = React.memo(() => {
  return (
    <div>
      <CountStateProvier>
        <h1>Counter</h1>
        <Counter />
      </CountStateProvier>
      <PersonStateProvier>
        <h1>Person</h1>
        <Person />
      </PersonStateProvier>
    </div>
  );
});

export default App;
