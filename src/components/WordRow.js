import { useState } from 'react';
import Letter from './Letter';
import words from '../utils/words';

function WordRow(props) {
    const [word, setWord] = useState('');
    const [exists, setExists] = useState(false);

    const wordUpdate = (ltr) => {
        setWord(word.concat(ltr));
    }

    const compareWord = (word) => {
        for(let i = 0; i < words.length; i++) {
            if(word === words[i]) {
                alert(words[i])
                break;
            } 
        }
    }

    const handleSubmit = () => {
        compareWord(word)
        props.callback(word)
    }

    return(
        <div className='word-container'>
            {word}
            <Letter callback={wordUpdate}/>
            <Letter callback={wordUpdate}/>
            <Letter callback={wordUpdate}/>
            <Letter callback={wordUpdate}/>
            <Letter callback={wordUpdate}/>
            <div>
                <button type='submit' onClick={handleSubmit}>Submit word</button>
            </div>
        </div>
    )
}

export default WordRow;