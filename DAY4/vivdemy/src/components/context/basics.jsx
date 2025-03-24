import React, { useContext, useState } from "react";

// Define/Create the context
const MyCounterContext = React.createContext();

export function GrandParent() {
  const [count, setCount] = useState(100);
  return (
    // Provider
    <MyCounterContext.Provider value={{ count, setCount }}>
      Grandparent
      <Parent />
    </MyCounterContext.Provider>
  );
}
function Parent() {
  return (
    <div>
      Parent
      <Child />
    </div>
  );
}
function Child() {
  var ctx = useContext(MyCounterContext); // Consumer
  return (
    <div>
      <p>Child Count: {ctx.count}</p>{" "}
      <button
        className="btn btn-outline-primary"
        onClick={() => ctx.setCount(ctx.count + 1)}
      >
        ++
      </button>
    </div>
  );
}
