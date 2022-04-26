import { useState } from 'react';
import Key from './Key';
import words from '../utils/words';

function Keyboard(props) {
    const [letters, setLetters] = useState('');
    const [includedLetters, setIncludedLetters] = useState('');

    // get props
    const wordToGuess = props.wordToGuess;
    const gameStarted = props.gameStarted;

    const alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    const abc1 = alphabet.slice(0, 10);
    const abc2 = alphabet.slice(10, 19);
    const abc3 = alphabet.slice(19);

    // get selected letters from the child component
    const getLetters = (ltrs) => {
        setLetters(letters.concat(ltrs))
        props.callback(letters);
    }

    // compare to wordToGuess
    const compareToWord = () => {
        if(letters.toLowerCase() === wordToGuess) {
            alert('winner')
        } else {
            compareToApi();
        }
    }

    // compare word with the api
    const compareToApi = () => {
        console.log(wordToGuess)
        for(let i = 0; i < words.length; i++) {
            if(letters.toLowerCase() === words[i]) {
                compareLetters();
            }
        }
    }

    // compare letters in the word
    const compareLetters = () => {
            console.log('compare letters')
            for(let i = 0; i < letters.length; i++) {
                if(wordToGuess.includes(letters[i].toLowerCase())) {
                    setIncludedLetters(includedLetters.concat(letters[i]))
                }
            }
    }

    const comparePosition = () => {

    }

    // handle submit
    const handleSubmit = () => {
        getLetters();
        compareToWord();
    }

    return(
        <div className='keyboard'>
            {includedLetters}
            <div className='keyboard-first-row'>
                {abc1.map((letter, i) => {
                    return <Key key={i} letter={letter.toUpperCase()} letters={letters} callback={getLetters} gameStarted={gameStarted} included={includedLetters}/>
                })}
            </div>
            <div className='keyboard-second-row'>
                {abc2.map((letter, i) => {
                    return <Key key={i} letter={letter.toUpperCase()} letters={letters} callback={getLetters} gameStarted={gameStarted} included={includedLetters}/>
                })}
            </div>
            <div className='keyboard-third-row'>
                {abc3.map((letter, i) => {
                    return <Key key={i} letter={letter.toUpperCase()} letters={letters} callback={getLetters} gameStarted={gameStarted} included={includedLetters}/>
                })}
            </div>
            <button type='submit' className="submit-btn" onClick={handleSubmit}>Submit Word</button>
        </div>
    )
}

export default Keyboard;