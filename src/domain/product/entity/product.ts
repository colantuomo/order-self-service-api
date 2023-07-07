import { IEntity } from '../../base/interfaces';
import { ProductCategories } from '../enums';

export class Product implements IEntity {

	id: string;
	name: string;
	price: number;
	description: string | null | undefined;
	category: ProductCategories

	constructor(id: string, name: string, price: number, category: ProductCategories, description?: string | null) {
		this.name = name;
		this.price = price;
		this.description = description;
		this.category = category;
		this.id = id;
	}
}
