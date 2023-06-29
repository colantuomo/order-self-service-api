import { PromiseResponse } from "../types/promise-response.type";

export interface IRepository<T> {
  create(item: T): PromiseResponse<T>;
  read(...args: unknown[]): PromiseResponse<T>;
  readById(id: string): PromiseResponse<T>;
  update(id: string, item: T): PromiseResponse<T>;
  delete(id: string): PromiseResponse<T>;
}
