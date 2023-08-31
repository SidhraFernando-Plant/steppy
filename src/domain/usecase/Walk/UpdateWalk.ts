import Walk from "../../model/Walk";
import WalkRepository from "../../repository/WalkRepository";

export interface UpdateWalkUseCase {
    walkRepository: WalkRepository;
    updateWalk: (walk: Walk) => void;
}

export default class UpdateWalk implements UpdateWalkUseCase {
    walkRepository: WalkRepository;

    constructor(walkRepository: WalkRepository) {
        this.walkRepository = walkRepository;
    }

    updateWalk = (walk: Walk) => {
        this.walkRepository.updateWalk(walk);
    }
}