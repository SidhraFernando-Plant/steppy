import React from 'react'
import './StartWalk.css'

type StartWalkProps = {
  walkDuration: number
}

export default function StartWalk({ walkDuration }: StartWalkProps) {
  let walkDisplayVal = '';
  // If duration is in minutes exactly (no extra seconds eg. 15 mins)
  if (walkDuration % 60 === 0) {
    walkDisplayVal = `${walkDuration/60} minutes`;
  }
  // If duration has extra seconds (eg. 15 mins 20 sec)
  else {
    const minutes = Math.floor(walkDuration/60);
    const seconds = walkDuration % 60;
    console.log(minutes);
    console.log(seconds);
    walkDisplayVal = `${minutes} min ${seconds} sec`;
  }
  return (
    <React.Fragment>
        <div>
            <p>Today's walk:</p>
            <h1>&#9201;&#65039; {walkDisplayVal}</h1>
            <button className='button-dark'>&#10003; Start</button>
        </div>
    </React.Fragment>
  )
}