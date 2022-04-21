import WordRow from "./WordRow";
import Keyboard from "./Keyboard";
import { useEffect, useState } from "react";

function Board(props) {
    const [word, setWord] = useState(['', '', '', '', '', '']);

    // import props
    const wordToGuess = props.wordToGuess;
    const gameStarted = props.gameStarted;

    useEffect(() => {
        //console.log(word.slice(5, 10))
    })

    // gets a word from the keyboard child component
    const getWord = (wrd) => {
        setWord((prevState) => {
            prevState[0] = wrd;
        })
    }

    return(
        <div className='board-container'>
            {word}
            <div className='word-row-container'>
                <WordRow word={() => {
                    if(word.length > 0) {
                        return word[0]
                    }
                }} />
                <WordRow word={() => {
                    if(word.length > 1) {
                        return word[1]
                    }
                }} />
                {/* <WordRow word={word[2]} />
                <WordRow word={word[3]} />
                <WordRow word={word[4]} />
                <WordRow word={word[5]} /> */}
            </div>
            <div className='keyboard-container'>
                <Keyboard callback={getWord} gameStarted={gameStarted} wordToGuess={wordToGuess}/>
            </div>
        </div>
    )
}

export default Board;