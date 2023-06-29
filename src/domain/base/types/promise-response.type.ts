import { IResponse } from "../interfaces/IResponse";

export type PromiseResponse<T> = Promise<IResponse<T> | IResponse<T[] | null>>;