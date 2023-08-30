import { useState } from "react";
import Walk from "../../domain/model/Walk";
import { GetCurrentWalkUseCase } from "../../domain/usecase/Walk/GetCurrentWalk";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { UpdateWalkUseCase } from "../../domain/usecase/Walk/UpdateWalk";
import { WalkStatus } from "../../util/types/WalkTypes";

export class HomepageViewModel {
    // Track current walk as it updates
    currentWalk: Walk | undefined = undefined;
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
}