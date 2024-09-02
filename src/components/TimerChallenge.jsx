import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal'

const TimerChallenge = ({ title, targetTime }) => {

    //  NOTE THAT WHEN USING HOOKS IT MUST BE DECLARED IN A COMPONENT
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timer = useRef();
    const dialog = useRef(); // Create a dialog modal reference

    const timerIsactive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

if (timeRemaining <= 0) {
    // This check confirms whether we 
    clearInterval(timer.current)
    dialog.current.showModal()
    
}

    function handleStart() {
        // setTimerStarted(true)
        timer.current = setInterval(() => {
        setTimeRemaining((prevTimeRemaining) => {
            return prevTimeRemaining - 10
        })    
        }, 10)
    }

    function handleReset() {
        clearInterval(timer.current)
        setTimeRemaining(targetTime * 1000)
    }

    function handleStop() {
        dialog.current.showModal()
        clearTimeout(timer.current)
        // setTimerStarted(false)

    }

    return (
        <>
        <ResultModal timeRemaining={timeRemaining} onReset={handleReset} ref={dialog}   targetTime={targetTime} result={'Won'}/>

          <section className='challenge'>
            <h2>
                {title}
            </h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>

            <p>
                <button onClick={timerIsactive ? handleStop : handleStart}> 
                    {timerIsactive ? 'stop' : 'start'} challenge</button>
            </p>
            <p  className={timerIsactive ? 'active' : undefined}>
                {timerIsactive ? 'Timer is running...' : 'Timer is inactive'}
            </p>
        </section>
        </>
      
    )
}

export default TimerChallenge