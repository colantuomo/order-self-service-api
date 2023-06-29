import { ICommand, IRepository, IResponse } from "./interfaces";
import { PromiseResponse } from "./types/promise-response.type";

export abstract class UseCase<T, R = IRepository<T>> {
    private _repository: R;
    constructor(repository: R) {
        this._repository = repository;
    }

    abstract handler(command: ICommand): PromiseResponse<T>;

    public get repository(): R {
        return this._repository;
    }
}