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
            {word}
            <div className='word-row-container'>
                <WordRow word={word.slice(0, 5)} />
                <WordRow word={word.slice(5, 10)} />
                <WordRow word={word.slice(10, 15)} />
                <WordRow word={word.slice(15, 20)} />
                <WordRow word={word.slice(20, 25)} />
                <WordRow word={word.slice(25, 30)} />
            </div>
            <div className='keyboard-container'>
                <Keyboard callback={getWord} gameStarted={gameStarted} wordToGuess={wordToGuess}/>
            </div>
        </div>
    )
}

export default Board;