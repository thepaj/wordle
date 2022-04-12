import Letter from './Letter';

function WordRow(props) {
    const word = props.word;
    const wordToGuess = props.wordToGuess;

    // const compare = () => {
    //     for(let i = 0; i < words.length; i++) {
    //         if(word === words[i]) {
    //             alert(word);
    //             break
    //         }
    //     }
    // }

    return(
        <div className='word-container'>
            <Letter letter={word[0]} wordToGuess={wordToGuess}/>
            <Letter letter={word[1]} wordToGuess={wordToGuess}/>
            <Letter letter={word[2]} wordToGuess={wordToGuess}/>
            <Letter letter={word[3]} wordToGuess={wordToGuess}/>
            <Letter letter={word[4]} wordToGuess={wordToGuess}/>
        </div>
    )
}

export default WordRow;