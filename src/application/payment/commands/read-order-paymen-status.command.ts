import { ICommand } from "../../../domain/base/interfaces";

export interface ReadOrderPaymentStatusCommand extends ICommand {
  orderId: string;
}
