import { useEffect, useState } from 'react';

function Key(props) {
    const letters = props.letters
    const [keyCss, setKeyCss] = useState('key-unclicked')

    const letter = props.letter;

    useEffect(() => {
        for(let i = 0; i < letters.length; i++) {
            if(letter === letters[i]) {
                console.log('key')
                setKeyCss('key-selected')
                break;
            }
        }
        console.log(`letters: ${letters}, letter: ${letter}`)
    }, [letters])

    return(
        <div className={keyCss}>
            <div className='key'>
                {letter}
            </div>
        </div>
    )
}

export default Key;