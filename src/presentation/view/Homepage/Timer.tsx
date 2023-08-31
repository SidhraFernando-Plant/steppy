import React, { useEffect } from 'react'
import './Timer.css'

type TimerProps = {
  walkDuration: number,
  walkElapsed: number,
  countdown: (seconds: number) => void,
}

export default function Timer({ walkDuration, walkElapsed, countdown }: TimerProps) {
  const remainingSeconds = walkDuration - walkElapsed;
  const remainingTimeMin = (Math.floor(remainingSeconds/60)).toString().padStart(2, '0');
  const remainingTimeSec = (remainingSeconds % 60).toString().padStart(2, '0');

  useEffect(() => {
    const timerInterval = setInterval(() => countdown(1), 1000);

    return () => clearInterval(timerInterval);
  }, [walkDuration, walkElapsed]);

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
            <button className='button-outline-light'>× Cancel</button>
            <button className='button-dark'>⏸ Pause</button>
        </div>
    </React.Fragment>
  )
}
