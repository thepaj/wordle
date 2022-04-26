import WordRow from "./WordRow";
import Keyboard from "./Keyboard";
import { useState } from "react";

function Board(props) {
    const [word, setWord] = useState(['']);

    // import props
    const wordToGuess = props.wordToGuess;
    const gameStarted = props.gameStarted;

    // gets a word from the keyboard child component
    const getWord = (wrd) => {
        setWord((prevState) => {
            return [wrd]
        })
    }

    return(
        <div className='board-container'>
            <div className='word-row-container'>
                <WordRow word={word[0]} />
                {/* <WordRow word={word} />
                <WordRow word={word} />
                <WordRow word={word} />
                <WordRow word={word} />
                <WordRow word={word} /> */}
            </div>
            <div className='keyboard-container'>
                <Keyboard callback={getWord} gameStarted={gameStarted} wordToGuess={wordToGuess}/>
            </div>
        </div>
    )
}

export default Board;