import React from "react";
import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😂": "joy",
  "😇": "innocent",
  "😉": "wink",
  "😪": "sleepy",
  "🙄": "roll eyes",
  "🥳": "partying",
  "😍": "heart-eyes",
  "🤑": "money-mouth-face",
  "🤗": "hugs",
  "😋": "yummy"
};
var emojis = Object.keys(emojiDictionary);
//console.log(emojis);

export default function App() {
  const [output, setOutput] = useState(" ");
  const [meaning, setMeaning] = useState(" ");

  function inputChangeHandler(event) {
    var input = event.target.value;

    var mean = "Meaning: " + emojiDictionary[input];

    if (emojiDictionary[input] === undefined)
      mean = "Sorry!,we don't have that in our database";

    setMeaning(mean);
  }
  function eventHandler(item) {
    var opt = "meaning: " + emojiDictionary[item];
    setOutput(opt);
  }

  return (
    <div className="App">
      <h1 className="text">Emoji Interpreter</h1>

      <input
        placeholder="enter emoji here"
        onChange={inputChangeHandler}
      ></input>
      <h3>{meaning}</h3>

      {/* <ul style={{ display: "flex", listStyle: "none" }}>
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
      </ul> */}
      <br />
      {emojis.map(function (emojis) {
        return (
          <span
            style={{ fontSize: "2rem", padding: ".5rem" }}
            key={emojis}
            onMouseOver={() => eventHandler(emojis)}
          >
            {emojis}{" "}
          </span>
        );
      })}
      <br />
      <h3 className="text"> {output} </h3>
    </div>
  );
}
