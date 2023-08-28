import Walk from "../model/Walk";

export default interface WalkRepository {
    createWalk: (walk: Walk) => void,
    deleteWalk: (walk: Walk) => void,
    getWalk: (id: string) => Walk,
    getWalks: () => Walk[],
    updateWalk: (walk: Walk) => void, 
}