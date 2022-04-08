import { useState } from 'react';
import Letter from './Letter';
import words from '../utils/words';

function WordRow(props) {
    const word = props.word;

    return(
        <div className='word-container'>
            <Letter letter={word[0]}/>
            <Letter letter={word[1]}/>
            <Letter letter={word[2]}/>
            <Letter letter={word[3]}/>
            <Letter letter={word[4]}/>
        </div>
    )
}

export default WordRow;