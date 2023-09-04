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

    findNextWalkDay = (currentDay: number, walkDays: number[]): number => {
        walkDays = walkDays.sort();
        const currentDayIdx = walkDays.findIndex((day) => day === currentDay);
        const newDayIdx = (currentDayIdx + 1) % walkDays.length;
        return newDayIdx;
    }

    findNextWalkDate = (walkDay: number): Date => {
        let walkDate = new Date();
        // Get next date of walkDay
        // Eg. if walkDay = 1 (monday), find the date of the next monday
        walkDate.setDate(walkDate.getDate() + (walkDay - 1 - walkDate.getDay() + 7) % 7 + 1);
        return walkDate;
    }

    generateWalk = (previousWalk: Walk) => {
        const newDuration = Math.round(previousWalk.duration * 1.1);
        const newDate = new Date();
        // Temporary method of user data access until it is properly implemented
        const walkDays = localStorage.getItem("days");
        let walkDaysArr: number[];
        if (walkDays === null) {
            walkDaysArr = [];
        }
        else {
            walkDaysArr = JSON.parse(walkDays);
        }
        const nextWalkDayIdx = this.findNextWalkDay(newDate.getDay(), walkDaysArr);
        const nextWalkDate = this.findNextWalkDate(walkDaysArr[nextWalkDayIdx]);
        const newWalk = new Walk(crypto.randomUUID(), newDuration, 0, nextWalkDate, PENDING_STATUS);
        this.walkRepository.createWalk(newWalk);
    }
}