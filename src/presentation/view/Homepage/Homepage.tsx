import React from 'react'
import './Homepage.css'
import Timer from './Timer'
import StartWalk from './StartWalk'
import { WalkStatus } from '../../../util/types/WalkTypes'
import { IN_PROGRESS_STATUS, COMPLETED_STATUS, PENDING_STATUS } from '../../../util/generalVals'

type HomepageProps = {
    walkStatus: WalkStatus
}

export default function Homepage({ walkStatus }: HomepageProps) {
    return (
        <div className='timer-container'>
            { walkStatus===IN_PROGRESS_STATUS &&
                <Timer />
            }

            { walkStatus===PENDING_STATUS &&
                <StartWalk />
            }

            { walkStatus===COMPLETED_STATUS &&
                <div>
                    <h1>&#127881; Nice work!</h1>
                    <p>You're done for today.</p>
                </div>
            }

            { walkStatus==='NONE' &&
                <div>
                    <h1>&#129496; It's your rest day!</h1>
                    <p>See you tomorrow.</p>
            </div>
            }
        </div>
    )
}