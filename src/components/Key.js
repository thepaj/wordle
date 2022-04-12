import { useState } from 'react';

function Key(props) {
    const [keyCss, setKeyCss] = useState('key-unclicked')

    // get props
    const letter = props.letter;
    const gameStarted = props.gameStarted;

    const onKeyClick = () => {
        if(gameStarted) {
            setKeyCss('key-selected');
            props.callback(letter);
        }
    }

    return(
        <div className={keyCss} onClick={onKeyClick}>
            <div className='key'>
                {letter}
            </div>
        </div>
    )
}

export default Key;