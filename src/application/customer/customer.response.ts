import { Customer } from "../../domain/customer/entity/customer";

export class CustomerResponse {

	public static format(data: Customer | any) {
		return data
	}

	public static formatList(data: Customer[] | any) {
		return data
	}

}
