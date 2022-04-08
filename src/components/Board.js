import WordRow from "./WordRow";
import Keyboard from "./Keyboard";
import words from '../utils/words';
import { useState } from "react";

function Board(props) {
    const [word, setWord] = useState('');

    // const wordToGuess = props.wordToGuess;

    // const getWords = (wrd) => {
    //     setWord(wrd)
    // }

    // gets a word from the keyboard child component
    const getWord = (wrd) => {
        console.log(`word: ${wrd}`);
        setWord(wrd)
    }

    return(
        <div className='board-container'>
            <div className='word-row-container'>
                <WordRow word={word}/>
                <WordRow word={word}/>
                <WordRow word={word}/>
                <WordRow word={word}/>
                <WordRow word={word}/>
                <WordRow word={word}/>
            </div>
            <div className='keyboard-container'>
                <Keyboard callback={getWord}/>
            </div>
        </div>
    )
}

export default Board;