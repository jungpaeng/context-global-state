import * as React from "react";

import { useGlobalState } from "../context/person";

const Person = () => {
  const [value, update] = useGlobalState("firstName");
  const { firstName } = value;

  return React.useMemo(() => {
    return (
      <div>
        <div>
          First Name:
          <input
            value={firstName}
            onChange={event => {
              const firstName = event.target.value;
              update(p => ({ ...p, firstName }));
            }}
          />
        </div>
      </div>
    );
  }, [value]);
};

export default Person;
