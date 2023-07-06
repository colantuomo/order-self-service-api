import { IResponse } from "../../domain/base/interfaces";
import { Product } from "../../domain/product/entity/product";

export class ProductResponse implements IResponse<Product | Product[]> {

	private _data: any;
	constructor(data: any) {
		this._data = data;
	}

	public format(data: Product | any) {
		if (Array.isArray(data)) {
			return data.map(({ id, name, price, category, description }) => new Product(id, name, price, category, description))
		}
		const { id, name, price, category, description } = data;
		return new Product(id, name, price, category, description);
	}

	public get data() {
		return this.format(this._data);
	}

}