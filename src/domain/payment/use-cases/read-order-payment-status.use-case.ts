import { ReadOrderPaymentStatusCommand } from "../../../application/payment/commands/read-order-paymen-status.command";
import { PaymentRepository } from "../../../infrastructure/adapters/payment/repository/payment.repository";
import { UseCase } from "../../base/UseCase";
import { Payment } from "../entity/payment";

export class ReadOrderPaymentStatusUseCase extends UseCase<Payment, PaymentRepository> {
  async handler({ orderId }: ReadOrderPaymentStatusCommand) {
    return this.repository.readOrderPaymentStatus(orderId);
  }
}
