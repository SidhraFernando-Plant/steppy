import React, { useEffect } from 'react'
import './Homepage.css'
import Timer from './Timer'
import StartWalk from './StartWalk'
import { WalkStatus } from '../../../util/types/WalkTypes'
import { IN_PROGRESS_STATUS, COMPLETED_STATUS, PENDING_STATUS } from '../../../util/generalVals'
import { HomepageViewModel } from '../../view_model/HomepageViewModel'
import { observer } from 'mobx-react-lite'

type HomepageProps = {
    homepageViewModel: HomepageViewModel,
}

const Homepage = ({ homepageViewModel }: HomepageProps) => {
    // Load walk when page loads
    useEffect(() => {
        homepageViewModel.getCurrentWalk();
    }, [])
    
    return (
        <div className='timer-container'>
            { typeof homepageViewModel.currentWalk === 'undefined' &&
                <div>
                    <h1>&#129496; It's your rest day!</h1>
                    <p>See you tomorrow.</p>
                </div>
            }
            { homepageViewModel.currentWalk?.status === IN_PROGRESS_STATUS &&
                <Timer 
                    walkDuration={homepageViewModel.currentWalk.duration} 
                    walkElapsed={homepageViewModel.currentWalk.elapsed} 
                    countdown={homepageViewModel.elapseTime}
                    isPaused={homepageViewModel.isPaused}
                    pause={homepageViewModel.togglePause}
                    cancelWalk={() => {
                        homepageViewModel.updateCurrentWalkStatus(PENDING_STATUS);
                        homepageViewModel.clearElapsedTime();
                    }}
                />
            }

            { homepageViewModel.currentWalk?.status===PENDING_STATUS &&
                <StartWalk 
                    walkDuration={homepageViewModel.currentWalk.duration} 
                    startWalk={() => homepageViewModel.updateCurrentWalkStatus(IN_PROGRESS_STATUS)}
                />
            }

            { homepageViewModel.currentWalk?.status===COMPLETED_STATUS &&
                <div>
                    <h1>&#127881; Nice work!</h1>
                    <p>You're done for today.</p>
                </div>
            }
        </div>
    )
}

export default observer(Homepage);