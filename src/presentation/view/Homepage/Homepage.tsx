import React from 'react'
import './Homepage.css'
import Timer from './Timer'
import StartWalk from './StartWalk'
import { WalkStatus } from '../../../util/types/WalkTypes'

type HomepageProps = {
    walkStatus: WalkStatus
}

export default function Homepage({ walkStatus }: HomepageProps) {
    return (
        <div className='timer-container'>
            { walkStatus===WalkStatus.IN_PROGRESS &&
                <Timer />
            }

            { walkStatus===WalkStatus.PENDING &&
                <StartWalk />
            }

            { walkStatus===WalkStatus.COMPLETED &&
                <div>
                    <h1>&#127881; Nice work!</h1>
                    <p>You're done for today.</p>
                </div>
            }

            { walkStatus===WalkStatus.NONE &&
                <div>
                    <h1>&#129496; It's your rest day!</h1>
                    <p>See you tomorrow.</p>
            </div>
            }
        </div>
    )
}