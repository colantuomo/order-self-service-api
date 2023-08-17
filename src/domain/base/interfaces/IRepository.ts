export interface IRepository<T> {
  create(item: T): Promise<T>;
  read(...args: unknown[]): Promise<T[]>;
  readById(id: string): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): Promise<T>;
}
