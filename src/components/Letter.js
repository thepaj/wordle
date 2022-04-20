import { useState } from "react";

function Letter(props) {
    
    // set variables
    const letterFalse = 'letter-false';
    const letterCorrect = 'letter-correct';
    const letterExact = 'letter-exact';

    const [css, setCss] = useState(letterFalse);

    return(
        <div className='letter-container'>
            <div className={css}>
                {props.letter}
            </div>
        </div>
    )
}

export default Letter;