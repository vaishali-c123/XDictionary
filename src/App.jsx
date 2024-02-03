import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [iniData, setIniData] = useState([]);
  const [meaning, setMeaning] = useState("");

  const data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const findWord = (word) => {
    let meaning = "";
    iniData.forEach((w) => {
      if (w.word.toLowerCase() === word) {
        meaning = w.meaning;
      }
    });

    if (meaning === "") {
      meaning = "Word not found in the dictionary.";
    }
    setMeaning(meaning);
  };

  useEffect(() => {
    setIniData(data);
  }, []);
  return (
    <div>
      <h1>Dictionary App</h1>
      <form
        onSubmit={(e) => (
          e.preventDefault(), findWord(e.target.word.value.toLowerCase())
        )}
      >
        <input name="word" type="text" placeholder="Search for a word" />
        <button type="submit">Search</button>
      </form>
      <div style={{ fontWeight: "bold" }}>Definition:</div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>{meaning}</div>
    </div>
  );
}
