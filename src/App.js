import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={clickHandler}>click me</button>
      <p>likes= {count}</p>
    </div>
  );
}
