import React from 'react'
import './Timer.css'

type TimerProps = {

}

export default function Timer({ }: TimerProps) {
  return (
    <div className='timer-container'>
        <div className='clock-face'>
            <div>8</div>
            <div>8</div>
            <span>:</span>
            <div>8</div>
            <div>8</div>
        </div>
    </div>
  )
}
