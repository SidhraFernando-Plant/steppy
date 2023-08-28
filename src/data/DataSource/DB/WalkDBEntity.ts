import { WalkStatus } from "../../../util/types/WalkTypes";

export interface WalkDBEntity {
    id: string,
    duration: number,
    elapsed: number,
    date: string,
    status: WalkStatus,
}