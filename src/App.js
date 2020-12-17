import React, { useState } from "react";
import "./styles.css";

var emojiList = {
  "🙍‍♂️": "man frowning",
  "🙎‍♂️": "man pouting",
  "🙅‍♂️": "man gesturing NO",
  "🙆‍♂️": "man gesturing OK",
  "🙇‍♂️": "man bowing",
  "🤷‍♂️": "man shrugging"
};

var emojisWeKnow = Object.keys(emojiList);

export default function App() {
  var [meaning, setMeaning] = useState("Your answer will appear here");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiList[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function inputClickHandler(emoji) {
    var meaning = emojiList[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        style={{ backgroundColor: "#EEF2FF" }}
        onChange={inputChangeHandler}
      ></input>
      <h2>{meaning}</h2>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => inputClickHandler(emoji)}
            style={{ padding: "1rem", fontSize: "x-large", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
