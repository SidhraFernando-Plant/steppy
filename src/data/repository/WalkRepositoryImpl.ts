import Walk from "../../domain/model/Walk";
import WalkRepository from "../../domain/repository/WalkRepository";
import WalkDataSource from "../DataSource/WalkDataSource";

export class WalkRepositoryImpl implements WalkRepository {
    dataSource: WalkDataSource;

    constructor(datasource: WalkDataSource) {
        this.dataSource = datasource;
    }

    createWalk = (walk: Walk) => {
        this.dataSource.createWalk(walk);
    }

    deleteWalk = (walk: Walk) => {
        
    }

    getWalk = (id: string) => {
        return this.dataSource.getWalk(id);
    }

    getWalks = () => {
        return this.dataSource.getWalks();
    }

    updateWalk = (walk: Walk) => {
        this.dataSource.updateWalk(walk);
    }
}