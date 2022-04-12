function Letter(props) {
    return(
        <div className='letter-container'>
            <div className='letter'>
                {props.letter}
            </div>
        </div>
    )
}

export default Letter;