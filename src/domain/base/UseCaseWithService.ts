import { ICommand, IRepository } from './interfaces';
import { PromiseResponse } from './types/promise-response.type';

export abstract class UseCaseWithService<T, S, R = IRepository<T>> {
	private _repository: R;
	private _service: S;
	constructor(repository: R, service: S) {
		this._repository = repository;
		this._service = service;
	}

	abstract handler(
		command: ICommand,
		aggregateRepository?: IRepository<any>,
	): PromiseResponse<T>;

	public get repository(): R {
		return this._repository;
	}

	public get service(): S {
		return this._service;
	}
}
