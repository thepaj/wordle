import { useState } from 'react';
import Key from './Key';

function Keyboard() {

    return(
        <div className='keyboard'>
            <div className='keyboard-first-row'>
                <Key letter='Q' />
                <Key letter='W' />
                <Key letter='E' />
                <Key letter='R' />
                <Key letter='T' />
                <Key letter='Y' />
                <Key letter='U' />
                <Key letter='I' />
                <Key letter='O' />
                <Key letter='P' />
            </div>
            <div className='keyboard-second-row'>
                <Key letter='A' />
                <Key letter='S' />
                <Key letter='D' />
                <Key letter='F' />
                <Key letter='G' />
                <Key letter='H' />
                <Key letter='J' />
                <Key letter='K' />
                <Key letter='L' />
            </div>
            <div className='keyboard-third-row'>
                <Key letter='Z' />
                <Key letter='X' />
                <Key letter='C' />
                <Key letter='V' />
                <Key letter='B' />
                <Key letter='N' />
                <Key letter='M' />
            </div>
        </div>
    )
}

export default Keyboard;