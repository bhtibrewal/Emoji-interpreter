import React from "react";
import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😂": "joy",
  "😇": "innocent",
  "😉": "wink",
  "😪": "sleepy",
  "🙄": "roll eyes",
  "🥳": "partying"
};
var emojis = Object.keys(emojiDictionary);
//console.log(emojis);

export default function App() {
  const [output, setOutput] = useState("");
  function inputChangeHandler(event) {
    var input = event.target.value;
    var meaning = "Meaning: " + emojiDictionary[input];

    if (meaning === undefined) meaning = "we don't have that in our database";

    setOutput(meaning);
  }
  function eventHandler(item) {
    var opt = "meaning: " + emojiDictionary[item];
    console.log(opt);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={inputChangeHandler}></input>
      <h3>{output}</h3>

      <ul style={{ display: "flex", listStyle: "none" }}>
        {emojis.map(function (item) {
          return (
            <li
              style={{ fontSize: "2rem", padding: "0.7rem" }}
              key={item}
              onMouseOver={() => eventHandler(item)}
              
            >
              {item}
            </li>
          );
        })}
      </ul>
<br>
      {emojis.map(function (emojis) {
        return (
          <span 
          style={{ fontSize: "2rem", padding:".5rem" }} 
          key={emojis}
          onMouseOver={() => eventHandler(emojis)}
            >
            {emojis}{" "}
          </span>
        );
      })}
    </div>
  );
}
