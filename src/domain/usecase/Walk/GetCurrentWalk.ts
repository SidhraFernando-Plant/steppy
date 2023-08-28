import Walk from "../../model/Walk";
import WalkRepository from "../../repository/WalkRepository";

export interface GetCurrentWalkUseCase {
    getCurrentWalk: () => Walk;
}

export default class GetCurrentWalk {
    walkRepository: WalkRepository;

    constructor(walkRepository: WalkRepository) {
        this.walkRepository = walkRepository;
    }

    getCurrentWalk = () => {
        const walks = this.walkRepository.getWalks();
        return walks.find((walk) => walk.date === new Date());
    }
}