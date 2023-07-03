import { ICommand } from "../../../domain/base/interfaces"
import { Customer } from "../../../domain/customer/entity/customer"

export interface CreateOrderCommand extends ICommand{
	customerId?: string,
	customer?: Customer,
	item?: Array<{
		product: string,
		quantity: number
	}>
}
