import { IResponse } from "../../domain/base/interfaces";
import { Customer } from "../../domain/customer/entity/customer";

export class CustomerResponse implements IResponse<Customer | Customer[]> {

	private _data: any;
	constructor(data: any) {
		this._data = data;
	}

	public format(data: Customer | any) {
		return data
	}

	public get data() {
		return this.format(this._data);
	}

}