import React, {useEffect, useState} from 'react';

const GuessNumber = () => {
    const [number, setNumber] = useState(Math.round(Math.random() *10))
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState('')
    const [availAttempts, setFreeAttempt] = useState(3)
    const [score, setScore] = useState(0)
    const changeInput = (e) =>{
        setGuess(e.target.value)
    }
   const check = () => {
        if (availAttempts){
            setFreeAttempt(availAttempts -1)
            setScore(score + 1)
        }
   }

   useEffect(() => {
       if (number === +guess){
           setMessage("You win")
       }
       if (availAttempts === 0){
           setMessage('You lost')
       }
       setGuess("")
   },[availAttempts])


    const newGame = () => {
        setFreeAttempt(3)
        setNumber(Math.round(Math.random()*10))
        setMessage("")
        setGuess("")
    }
    return (
        <div>
            <div className="row">
                <div className="col-6">
            <h1>Guess the number in 3 attempts</h1>
            <form className='input-group mb-3'>
                <input type="number" id={"number"} value={guess} onChange={changeInput} className='form-control' placeholder={"add number"}/>
            </form>
            <button onClick={check} disabled={!guess} className={'btn btn-primary'}>Check</button>
            <button onClick={newGame} className={'btn btn-primary'}>New game</button>
            <div>You have {availAttempts} attempts left</div>
            <div>
                <h2>{message}</h2>
                <h4>Your score: {score}</h4>
            </div>
                </div>
            </div>
        </div>
    );
};
export default GuessNumber;