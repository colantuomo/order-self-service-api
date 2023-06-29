import { IResponse } from "./interfaces";

export class Response<T> implements IResponse<T> {
  private _data: T;
  constructor(data: T) {
    this._data = data;
  }

  public get data() {
    return this._data;
  }
}