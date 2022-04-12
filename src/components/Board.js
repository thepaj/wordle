import WordRow from "./WordRow";
import Keyboard from "./Keyboard";
import { useState } from "react";

function Board(props) {
    const [word, setWord] = useState('');

    // import props
    const wordToGuess = props.wordToGuess;
    const gameStarted = props.gameStarted;

    // gets a word from the keyboard child component
    const getWord = (wrd) => {
        console.log(`word: ${wrd}`);
        setWord(wrd)
    }

    return(
        <div className='board-container'>
            <div className='word-row-container'>
                <WordRow word={word} wordToGuess={wordToGuess}/>
                <WordRow word={word} wordToGuess={wordToGuess}/>
                <WordRow word={word} wordToGuess={wordToGuess}/>
                <WordRow word={word} wordToGuess={wordToGuess}/>
                <WordRow word={word} wordToGuess={wordToGuess}/>
                <WordRow word={word} wordToGuess={wordToGuess}/>
            </div>
            <div className='keyboard-container'>
                <Keyboard callback={getWord} gameStarted={gameStarted}/>
            </div>
        </div>
    )
}

export default Board;