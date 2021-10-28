import React from "react";
import "./styles.css";
import { useState } from "react";


export default function App() {
  var[output, setOutput]=useState("");

  function inputChangeHandler(event) {
    setOutput(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={inputChangeHandler}></input>
      welcome {output}
    </div>
  );
}
