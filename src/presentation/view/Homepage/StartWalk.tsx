import React from 'react'
import './StartWalk.css'

type StartWalkProps = {

}

export default function StartWalk({ }: StartWalkProps) {
  return (
    <React.Fragment>
        <div>
            <p>Today's walk:</p>
            <h1>&#9201;&#65039; 88 minutes</h1>
            <button className='button-dark'>&#10003; Start</button>
        </div>
    </React.Fragment>
  )
}