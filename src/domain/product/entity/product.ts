import { IEntity } from '../../base/interfaces';
import { Order } from '../../order/entity/order';
import { ProductCategories } from '../enums';

export class Product implements IEntity {

  id: string;
  name: string;
  price: number;
  description: string | null | undefined;
  category: ProductCategories
  orders: Order[];

  constructor(id: string, name: string, price: number, category: ProductCategories, description?: string | null) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category
    this.orders = [];
    this.id = id;
  }
}
