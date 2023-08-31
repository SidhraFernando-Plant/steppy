import React, { useEffect } from 'react'
import './Timer.css'

type TimerProps = {
  walkDuration: number,
  walkElapsed: number,
  isPaused: boolean,
  pause: () => void
  countdown: (seconds: number) => void,
  cancelWalk: () => void,
}

export default function Timer({ walkDuration, walkElapsed, isPaused, pause, countdown, cancelWalk }: TimerProps) {
  const remainingSeconds = walkDuration - walkElapsed;
  const remainingTimeMin = (Math.floor(remainingSeconds/60)).toString().padStart(2, '0');
  const remainingTimeSec = (remainingSeconds % 60).toString().padStart(2, '0');

  useEffect(() => {
    if (!isPaused) {
      const timerInterval = setInterval(() => countdown(1), 1000);

      return () => clearInterval(timerInterval);
    }
  }, [walkDuration, walkElapsed, isPaused]);

  return (
    <React.Fragment>
        <div className='clock-face'>
            {remainingTimeMin.split('').map((char, i) => (
              <div key={i}>{char}</div>
            ))}
            <span>:</span>
            {remainingTimeSec.split('').map((char, i) => (
              <div key={i}>{char}</div>
            ))}
        </div>
        <div className='timer-buttons'>
            <button className='button-outline-light' onClick={cancelWalk}>× Cancel</button>
            <button className='button-dark' onClick={pause}>{isPaused ? '▶ Start' : '⏸ Pause' }</button>
        </div>
    </React.Fragment>
  )
}
