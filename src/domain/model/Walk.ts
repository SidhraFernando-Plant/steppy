import { makeAutoObservable } from "mobx";
import { WalkStatus } from "../../util/types/WalkTypes";

export default class Walk {
    id: string;
    // Duration is in seconds
    duration: number;
    elapsed: number;
    date: Date;
    status: WalkStatus;

    constructor(id: string, duration: number, elapsed: number, date: Date, status: WalkStatus) {
        this.id = id;
        this.duration = duration;
        this.elapsed = elapsed;
        this.date = date;
        this.status = status;
    }
}