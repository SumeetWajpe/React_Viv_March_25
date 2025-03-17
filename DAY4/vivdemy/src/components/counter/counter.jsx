import { useState } from "react";

var Counter = () => {
  var [count, setCount] = useState({ currCount: 10 }); // useState is available only from 16.8 version of react - Hook
  return (
    <>
      <p>Count : {count.currCount}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount({ currCount: count.currCount + 1 });
        }}
      >
        Increment++
      </button>
    </>
  );
};

export default Counter;
