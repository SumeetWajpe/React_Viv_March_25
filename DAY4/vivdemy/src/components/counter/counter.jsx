import { useState } from "react";

var Counter = () => {
  var [count, setCount] = useState({ currCount: 10 }); // useState is available only from 16.8 version of react - Hook
  var [age, setAge] = useState(18);
  return (
    <>
      <p>Count : {count.currCount}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount({ currCount: count.currCount + 10 });
        }}
      >
        Increment++
      </button>
      <hr />
      <p>Age : {age}</p>
      <button className="btn btn-primary" onClick={() => setAge(age + 1)}>
        Age++
      </button>
    </>
  );
};

export default Counter;
