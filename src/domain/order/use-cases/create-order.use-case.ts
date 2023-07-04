
import { CreateOrderCommand } from "../../../application/order/commands/create-order.command";
import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Order } from "../entity/order";
import { v4 } from "uuid";

export class CreateOrderUseCase extends UseCase<Order | Order[]>{
	handler(command: CreateOrderCommand): PromiseResponse<Order | Order[]> {
		const order = new Order(v4(), command.customer)
		return this.repository.create(order)
	}
}
