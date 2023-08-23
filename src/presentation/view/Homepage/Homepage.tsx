import React from 'react'
import './Homepage.css'
import Timer from './Timer'
import { WalkStatus } from '../../../types/WalkTypes'

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
                <Timer />
            }

            { walkStatus===WalkStatus.COMPLETED &&
                <Timer />
            }

            { walkStatus===WalkStatus.NONE &&
                <Timer />
            }
        </div>
    )
}