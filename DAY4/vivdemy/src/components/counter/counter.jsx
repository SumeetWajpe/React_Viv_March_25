import { useState } from "react";

var Counter = () => {
  var [mystate, setmyState] = useState({ count: 10, age: 18 }); // useState is available only from 16.8 version of react - State Hook
  return (
    <>
      <p>Count : {mystate.count}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setmyState({ ...mystate, count: mystate.count + 10 });
        }}
      >
        Increment++
      </button>
      <hr />
      <p>Age : {mystate.age}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setmyState({ ...mystate, age: mystate.age + 1 });
        }}
      >
        Age++
      </button>
    </>
  );
};

export default Counter;
