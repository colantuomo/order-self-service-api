import { Order } from '../../order/entity/order';

export class Product {
  private _name: string;
  private _price: number;
  private _description: string | undefined;
  private _orders: Order[];

  constructor(name: string, price: number, description?: string) {
    this._name = name;
    this._price = price;
    this._description = description;
    this._orders = [];
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }

  public get orders(): Order[] {
    return this._orders;
  }

  public set orders(orders: Order[]) {
    this._orders = orders;
  }

  public get description(): string | undefined {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
}
