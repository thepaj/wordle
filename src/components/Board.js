import WordRow from "./WordRow";
import Keyboard from "./Keyboard";
import words from '../utils/words';
import { useState } from "react";

function Board(props) {
    const [words, setWords] = useState('');

    const wordToGuess = props.wordToGuess;

    const getWords = (word) => {
        setWords(words.concat(word));
        console.log(words);
    }

    return(
        <div className='board-container'>
            <div className='word-row-container'>
                <WordRow callback={getWords}/>
                <WordRow callback={getWords}/>
                <WordRow callback={getWords}/>
                <WordRow callback={getWords}/>
                <WordRow callback={getWords}/>
                <WordRow callback={getWords}/>
            </div>
            <div className='keyboard-container'>
                <Keyboard usedLetters={words}/>
            </div>
        </div>
    )
}

export default Board;