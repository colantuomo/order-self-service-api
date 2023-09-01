import { ICommand } from "../../../domain/base/interfaces";

export interface ReadOrderPaymentInfoCommand extends ICommand {
  orderId: string;
  paymentId: string;
  externalPaymentId: number;
}
