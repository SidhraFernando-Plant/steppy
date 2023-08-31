import { WalkStatus } from "../../../util/types/WalkTypes";

export interface WalkDBEntity {
    id: string,
    // Duration is in seconds
    duration: number,
    elapsed: number,
    date: string,
    status: WalkStatus,
}