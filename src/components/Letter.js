import { useState } from 'react';

function Letter(props) {
    const [letter, setletter] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setletter(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.callback(letter)
    }

    return(
        <div className='letter-container'>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={letter} />
                </form>
            </div>
        </div>
    )
}

export default Letter;