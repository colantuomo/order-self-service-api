import { UpdateItemOrderCommand } from "../../../application/order/commands/update-item-order.command";
import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Order } from "../entity/order";

export class InsertItemOrderUseCase extends UseCase<Order | Order[]> {
	handler(command: UpdateItemOrderCommand): PromiseResponse<Order | Order[]> {
		throw new Error("Method not implemented.");
	}
}
