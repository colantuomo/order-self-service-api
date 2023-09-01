import { UpdateOrderStatusCommand } from "../../../application/order/commands/update-order-status.command";
import { UseCase } from "../../base/UseCase";
import { Order } from "../entity/order";

export class UpdateStatusOrderUseCase extends UseCase<Order> {
  async handler(command: UpdateOrderStatusCommand) {
    const { id, status } = command;
    const order = await this.repository.readById(id);
    order.status = status;
    return this.repository.update(id, order);
  }
}
