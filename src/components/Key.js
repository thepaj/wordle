import { useEffect, useState } from 'react';

function Key(props) {
    const [keyCss, setKeyCss] = useState('key-unclicked')

    const letter = props.letter;

    const onKeyClick = () => {
        setKeyCss('key-selected');
        props.callback(letter)
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