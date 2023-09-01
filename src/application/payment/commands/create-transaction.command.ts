import { ICommand } from "../../../domain/base/interfaces";

export interface CreateTransactionCommand extends ICommand {
  orderId: string;
  paymentId: string;
  transactionAmount: number;
  issuerId?: string;
  description: string;
  installments: number;
  token?: string;
  payer: {
    email: string;
  },
  paymentMethodId: string
}
