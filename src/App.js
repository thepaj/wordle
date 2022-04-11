import { useEffect, useState } from "react";
import Board from "./components/Board";
import words from './utils/words';

function App() {
  const [started, setStarted] = useState(false);
  const [wordToGuess, setWordToGuess] = useState('');
  const [splitWord, setSplitWord] = useState([]);

  function startGame() {
      let word = words[Math.floor(Math.random()*words.length)];
      setWordToGuess(word);
  } 

  return (
    <div className="content">
      <h1>Wordle</h1>
      {wordToGuess}
      <div>
        <button className='start-btn' onClick={startGame}>Start Game</button>
      </div>
      <div>
        <Board wordToGuess={wordToGuess}/>
      </div>
    </div>
  );
}

export default App;
