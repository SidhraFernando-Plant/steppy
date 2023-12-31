import Walk from "../../model/Walk";
import WalkRepository from "../../repository/WalkRepository";

export interface GetCurrentWalkUseCase {
    walkRepository: WalkRepository;
    getCurrentWalk: () => Walk | undefined;
}

export default class GetCurrentWalk implements GetCurrentWalkUseCase {
    walkRepository: WalkRepository;

    constructor(walkRepository: WalkRepository) {
        this.walkRepository = walkRepository;
    }

    getCurrentWalk = () => {
        const walks = this.walkRepository.getWalks();
        const now = new Date();
        return walks.find((walk) => walk.date.toDateString() === now.toDateString());
    }
}