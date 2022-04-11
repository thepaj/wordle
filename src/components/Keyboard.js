import { useState } from 'react';
import Key from './Key';
import words from '../utils/words';
import { unmountComponentAtNode } from 'react-dom';

function Keyboard(props) {
    const [letters, setLetters] = useState('');

    const wordToGuess = props.wordToGuess;

    // get selected letters from the child component
    const getLetters = (ltrs) => {
        setLetters(letters.concat(ltrs))
        if(letters.length === 5) {
            props.callback(letters);
            setLetters('')
        }
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
                alert('exist')
            }
        }
    }

    // handle submit
    const handleSubmit = () => {
        getLetters();
        compareToWord();
    }

    return(
        <div className='keyboard'>
            <div className='keyboard-first-row'>
                <Key letter='Q' letters={letters} callback={getLetters}/>
                <Key letter='W' letters={letters} callback={getLetters} />
                <Key letter='E' letters={letters} callback={getLetters} />
                <Key letter='R' letters={letters} callback={getLetters} />
                <Key letter='T' letters={letters} callback={getLetters} />
                <Key letter='Y' letters={letters} callback={getLetters} />
                <Key letter='U' letters={letters} callback={getLetters} />
                <Key letter='I' letters={letters} callback={getLetters} />
                <Key letter='O' letters={letters} callback={getLetters} />
                <Key letter='P' letters={letters} callback={getLetters} />
            </div>
            <div className='keyboard-second-row'>
                <Key letter='A' letters={letters} callback={getLetters} />
                <Key letter='S' letters={letters} callback={getLetters} />
                <Key letter='D' letters={letters} callback={getLetters} />
                <Key letter='F' letters={letters} callback={getLetters} />
                <Key letter='G' letters={letters} callback={getLetters} />
                <Key letter='H' letters={letters} callback={getLetters} />
                <Key letter='J' letters={letters} callback={getLetters} />
                <Key letter='K' letters={letters} callback={getLetters} />
                <Key letter='L' letters={letters} callback={getLetters} />
            </div>
            <div className='keyboard-third-row'>
                <Key letter='Z' letters={letters} callback={getLetters} />
                <Key letter='X' letters={letters} callback={getLetters} />
                <Key letter='C' letters={letters} callback={getLetters} />
                <Key letter='V' letters={letters} callback={getLetters} />
                <Key letter='B' letters={letters} callback={getLetters} />
                <Key letter='N' letters={letters} callback={getLetters} />
                <Key letter='M' letters={letters} callback={getLetters} />
            </div>
            <button type='submit' onClick={handleSubmit}>Submit Word</button>
        </div>
    )
}

export default Keyboard;