import { useState } from "react";
import Flashcard from "./Flashcard";
import {answers, questions} from "./data.js";

function App() {
const ans = answers;
const ques = questions;
  const [front, setFront] = useState("front");
  const [back, setBack]  = useState("back");
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);   // Round up the minimum value
    max = Math.floor(max);   // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nextCard = async () => {
    var questionNumber = getRandomInt(0, ques.length - 1);
    var f = ques[questionNumber];
    var b = ans[questionNumber];
    setFront(f)
    setBack(b)
    console.log(f);
    console.log(b);
    console.log(questionNumber);
  }
  return (
    <div className="App">
          <div className="flashcard-container">
            <Flashcard
              frontText = {front}
              backText = {back}
            />
          </div>
          <button onClick={nextCard}>Change Question</button>
    </div>
  );
}

export default App;
