import { ICommand } from "../../../domain/base/interfaces";
import { EOrderStatus } from "../../../domain/order/entity/order-status.enum";

export interface UpdateOrderStatusCommand extends ICommand {
  id: string;
  status: EOrderStatus;
}
