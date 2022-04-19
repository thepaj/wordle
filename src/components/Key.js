import { useEffect, useState } from 'react';

function Key(props) {
    // css variables
    const keyUnclicked = 'key-unclicked';
    const keyIncluded = 'key-included';
    const keySelected = 'key-selected';

    // state
    const [keyCss, setKeyCss] = useState(keyUnclicked)

    // get props
    const letter = props.letter;
    const gameStarted = props.gameStarted;
    const included = props.included;

    useEffect(() => {
        for(let i = 0; i < included.length; i++) {
            if(letter === included[i]) {
                setKeyCss(keyIncluded)
            } else {
                setKeyCss(keyUnclicked)
            }
        }
    }, [included, letter])

    const onKeyClick = () => {
        if(gameStarted) {
            setKeyCss(keySelected);
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