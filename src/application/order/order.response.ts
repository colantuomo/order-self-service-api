import { IResponse } from "../../domain/base/interfaces";
import { Customer } from "../../domain/customer/entity/customer";
import { Order } from "../../domain/order/entity/order";

export class OrderResponse implements IResponse<Order | Order[]> {
	private _data: any;
	constructor(data: any) {
		this._data = data;
	}

	public format(data: Order | any) {
		return new Order('1', new Customer('teste', 'teste', 'teste'))
	}
	public get data() {
		return this.format(this._data);
	}
}