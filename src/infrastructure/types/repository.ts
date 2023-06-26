export interface IRepository<T> {
  create(item: T): Promise<T> | T;
  read({ ...args }): Promise<T | T[]> | T;
  update(id: string, item: T): Promise<T> | T;
  delete(id: string): Promise<T> | T;
}
