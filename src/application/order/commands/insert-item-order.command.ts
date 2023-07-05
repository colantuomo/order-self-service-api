import { ICommand } from "../../../domain/base/interfaces"
import { Order } from "../../../domain/order/entity/order"
import { Product } from "../../../domain/product/entity/product"

export interface InsertItemOrderCommand extends ICommand {
	order?: Order,
	items: [
		{
			product: Product, 
			quantity: 0
		}
	]
}
