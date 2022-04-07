import { useEffect, useState } from 'react';
import Key from './Key';

function Keyboard(props) {
    const letters = props.usedLetters;

    useEffect(() => {
        //console.log(`letters: ${letters}`)
    }, [letters])

    return(
        <div className='keyboard'>
            <div className='keyboard-first-row'>
                <Key letter='Q' letters={letters}/>
                <Key letter='W' letters={letters} />
                <Key letter='E' letters={letters} />
                <Key letter='R' letters={letters} />
                <Key letter='T' letters={letters} />
                <Key letter='Y' letters={letters} />
                <Key letter='U' letters={letters} />
                <Key letter='I' letters={letters} />
                <Key letter='O' letters={letters} />
                <Key letter='P' letters={letters} />
            </div>
            <div className='keyboard-second-row'>
                <Key letter='A' letters={letters} />
                <Key letter='S' letters={letters} />
                <Key letter='D' letters={letters} />
                <Key letter='F' letters={letters} />
                <Key letter='G' letters={letters} />
                <Key letter='H' letters={letters} />
                <Key letter='J' letters={letters} />
                <Key letter='K' letters={letters} />
                <Key letter='L' letters={letters} />
            </div>
            <div className='keyboard-third-row'>
                <Key letter='Z' letters={letters} />
                <Key letter='X' letters={letters} />
                <Key letter='C' letters={letters} />
                <Key letter='V' letters={letters} />
                <Key letter='B' letters={letters} />
                <Key letter='N' letters={letters} />
                <Key letter='M' letters={letters} />
            </div>
        </div>
    )
}

export default Keyboard;