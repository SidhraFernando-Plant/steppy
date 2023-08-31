import { useState } from "react";
import Walk from "../../domain/model/Walk";
import { GetCurrentWalkUseCase } from "../../domain/usecase/Walk/GetCurrentWalk";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { UpdateWalkUseCase } from "../../domain/usecase/Walk/UpdateWalk";
import { WalkStatus } from "../../util/types/WalkTypes";
import { COMPLETED_STATUS } from "../../util/generalVals";

export class HomepageViewModel {
    // Track current walk as it updates
    currentWalk: Walk | undefined = undefined;
    isPaused: boolean = true;
    getCurrentWalkUseCase: GetCurrentWalkUseCase;
    updateWalkUseCase: UpdateWalkUseCase;

    // Link relevant use case for getting the current walk
    constructor(getCurrentWalkUseCase: GetCurrentWalkUseCase, updateWalkUseCase: UpdateWalkUseCase) {
        this.getCurrentWalkUseCase = getCurrentWalkUseCase;
        this.updateWalkUseCase = updateWalkUseCase;
        makeAutoObservable(this);
    }

    // Get the current walk
    getCurrentWalk = (): void => {
        this.currentWalk = this.getCurrentWalkUseCase.getCurrentWalk();
    }

    // Update current walk in state and DB
    updateCurrentWalkStatus = (newStatus: WalkStatus): void => {
        if (this.currentWalk !== undefined) {
            const updatedWalk: Walk = {...this.currentWalk, status: newStatus};
            this.currentWalk = updatedWalk;
            this.updateWalkUseCase.updateWalk(updatedWalk);
        }
    }

    // Update the elapsed seconds on a walk
    elapseTime = (seconds: number): void => {
        if (this.currentWalk !== undefined) {
            const updatedWalk: Walk = {...this.currentWalk, elapsed: this.currentWalk.elapsed + seconds};
            // If elapsing time finished the walk, update the status
            if (updatedWalk.elapsed === updatedWalk.duration) {
                updatedWalk.status = COMPLETED_STATUS;
            }
            this.currentWalk = updatedWalk;
            this.updateWalkUseCase.updateWalk(updatedWalk);
        }
    }

    clearElapsedTime = (): void => {
        if (this.currentWalk !== undefined) {
            const updatedWalk: Walk = {...this.currentWalk, elapsed: 0};
            this.currentWalk = updatedWalk;
            this.updateWalkUseCase.updateWalk(updatedWalk);
            // If clearing elapsed time, also want to be sure it is paused
            this.isPaused =  true;
        }
    }

    // Pause and unpause the timer
    togglePause = (): void => {
        this.isPaused = !this.isPaused;
    }
}