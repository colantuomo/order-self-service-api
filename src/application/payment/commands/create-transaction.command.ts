import { ICommand } from "../../../domain/base/interfaces";

export interface CreateTransactionCommand extends ICommand {
  paymentId: string;
  value: number;
}
