
export class Response<T> {
  private _data: T;
  constructor(data: T) {
    this._data = data;
  }

  public get data() {
    return this._data;
  }
}
