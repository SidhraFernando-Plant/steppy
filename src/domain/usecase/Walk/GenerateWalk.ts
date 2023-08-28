import { PENDING_STATUS } from "../../../util/generalVals";
import Walk from "../../model/Walk";
import WalkRepository from "../../repository/WalkRepository";

export interface GenerateWalkUseCase {
    walkRepository: WalkRepository;
    generateWalk: (previousWalk: Walk) => void;
}

export default class GenerateWalk implements GenerateWalkUseCase {
    walkRepository: WalkRepository;

    constructor(walkRepository: WalkRepository) {
        this.walkRepository = walkRepository;
    }

    generateWalk = (previousWalk: Walk) => {
        const newDuration = 1;
        const newDate = new Date();
        const newWalk = new Walk(crypto.randomUUID(), newDuration, 0, newDate, PENDING_STATUS)
        this.walkRepository.createWalk(newWalk);
    }
}