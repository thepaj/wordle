import { useState } from "react";
import Board from "./components/Board";
import words from './utils/words';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [wordToGuess, setWordToGuess] = useState('');

  function startGame() {
      let word = words[Math.floor(Math.random()*words.length)];
      setWordToGuess(word);
      setGameStarted(true);
  } 

  return (
    <div className="content">
      <h1>Wordle</h1>
      {wordToGuess}
      <div>
        <button className='start-btn' onClick={startGame}>Start Game</button>
      </div>
      <div>
        <Board wordToGuess={wordToGuess} gameStarted={gameStarted}/>
      </div>
    </div>
  );
}

export default App;
