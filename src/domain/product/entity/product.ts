import { IEntity } from '../../base/interfaces';
import { Order } from '../../order/entity/order';

export class Product implements IEntity {

  id: string;
  name: string;
  price: number;
  description: string | null | undefined;
  orders: Order[];

  constructor(id: string, name: string, price: number, description?: string | null) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.orders = [];
    this.id = id;
  }
}
