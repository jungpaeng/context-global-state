import * as React from "react";

import { dispatch, useGlobalState } from "../context/person";

const setFirstName = (event: React.FormEvent<HTMLInputElement>) =>
  dispatch({
    firstName: event.currentTarget.value,
    type: "setFirstName"
  });

const Person = () => {
  const [value] = useGlobalState("person");
  const { firstName } = value;

  return React.useMemo(() => {
    return (
      <div>
        <div>
          First Name:
          <input value={firstName} onChange={setFirstName} />
        </div>
      </div>
    );
  }, [firstName]);
};

export default Person;
