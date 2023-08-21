import { UseCase } from "../../base/UseCase";
import { UpdatePaymentCommand } from "../../../application/payment/commands/update-payment.command";
import { PaymentRepository } from "../../../infrastructure/adapters/payment/repository/payment.repository";
import { Payment } from "../entity/payment";


export class UpdatePaymentUseCase extends UseCase<Payment, PaymentRepository>  {
    async handler({ idPayment, status }: UpdatePaymentCommand) {
        return this.repository.updateStatus(idPayment, status)
    }
}
