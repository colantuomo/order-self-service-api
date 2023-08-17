import { ICommand } from "../../../domain/base/interfaces";

export interface CreateTransactionCommand extends ICommand {
  orderId: string;
  paymentId: string;
  value: number;
}
