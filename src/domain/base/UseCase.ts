import { ICommand, IRepository } from './interfaces';

export abstract class UseCase<T, R = IRepository<T>> {
    private _repository: R;
    constructor(repository: R) {
        this._repository = repository;
    }

    abstract handler(
        command: ICommand,
        ...args: any
    ): Promise<T | T[]>;

    public get repository(): R {
        return this._repository;
    }
}
