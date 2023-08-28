import { useState } from "react";
import Walk from "../../domain/model/Walk";
import { GetCurrentWalkUseCase } from "../../domain/usecase/Walk/GetCurrentWalk";
import { action, observable } from "mobx";

export class HomepageViewModel {
    // Track current walk as it updates
    @observable 
    currentWalk: Walk | undefined = undefined;
    getCurrentWalkUseCase: GetCurrentWalkUseCase;

    // Link relevant use case for getting the current walk
    constructor(getCurrentWalkUseCase: GetCurrentWalkUseCase) {
        this.getCurrentWalkUseCase = getCurrentWalkUseCase;
    }

    // Get the current walk
    @action
    getCurrentWalk = (): void => {
        this.currentWalk = this.getCurrentWalkUseCase.getCurrentWalk();
    }
}