import { useCallback, useState } from "react";
import Keyboard from "./components/Keyboard";
import WordRow from "./components/WordRow";
import words from './utils/words';

function App() {
  const [wordToGuess, setWordToGuess] = useState('');

  const startGame = useCallback(async () => {
    let word = words[Math.floor(Math.random()*words.length)]
    setWordToGuess(word);
    console.log(wordToGuess)
  })

  return (
    <div className="content">
      <h1>Wordle</h1>
      <p>{wordToGuess}</p>
      <div>
        <button className='start-btn' onClick={startGame}>Start Game</button>
      </div>
      <div className='word-row-container'>
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
        <WordRow />
      </div>
      <div className='keyboard-container'>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
