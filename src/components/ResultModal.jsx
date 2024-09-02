import React, { forwardRef } from 'react'
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ targetTime,  onReset, timeRemaining }, ref) {
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const userLost = timeRemaining <= 0
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)
    return createPortal(

        <dialog ref={ref} className='result-modal'>
            {
                // userLost && (
                //     <p>You Lost ��</p>
                // ) || (
                //     <p>You Won ���</p>
                // )
                userLost && <h2>You Lost!</h2>
            }
            {!userLost && <h2> You Won👌Your score: {score}</h2>}
            <p>
                The Target time was {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                You stopped the timer with {formattedTimeRemaining} seconds left 😂
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')


    )
})



export default ResultModal