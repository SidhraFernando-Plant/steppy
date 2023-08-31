import Walk from "../../../domain/model/Walk";
import WalkDataSource from "../WalkDataSource";
import { WalkDBEntity } from "./WalkDBEntity";
import { WALKS_DATA_KEY } from "../../../util/dataVals";
import { WalkStatus } from "../../../util/types/WalkTypes";

const localStorageFetch = (key: string): WalkDBEntity[] => {
    const rawData = localStorage.getItem(key);
    const parsedData: WalkDBEntity[] = (rawData === null) ? [] : JSON.parse(rawData);
    return parsedData;
}

export default class WalkDBDataSourceImpl implements WalkDataSource {
    createWalk = (walk: Walk) => {
        let walks = localStorageFetch(WALKS_DATA_KEY);
        const walkToAdd: WalkDBEntity = { id: walk.id, duration: walk.duration, elapsed: walk.elapsed, date: walk.date.toDateString(), status: walk.status }
        walks.push(walkToAdd);
        localStorage.setItem(WALKS_DATA_KEY, JSON.stringify(walks));
    };
    deleteWalk = (walk: Walk) => {
        console.log('delete');
        console.log(walk)
    };
    getWalk = (id: string) => {
        const walks = localStorageFetch(WALKS_DATA_KEY);
        // TODO: Change this to account for undefined
        const result = walks.find((walk) => walk.id === id) as WalkDBEntity;
        return new Walk(result.id, result.duration, result.elapsed, new Date(result.date), result.status);
    };
    getWalks = () => {
        const walks = localStorageFetch(WALKS_DATA_KEY);
        return walks.map((walk) => new Walk(walk.id, walk.duration, walk.elapsed, new Date(walk.date), walk.status));
    };
    updateWalk = (walk: Walk) => {
        const walks = localStorageFetch(WALKS_DATA_KEY);
        const updatedWalks = walks.map((walkData) => walkData.id === walk.id ? walk : walkData);
        localStorage.setItem(WALKS_DATA_KEY, JSON.stringify(updatedWalks));
    };
}