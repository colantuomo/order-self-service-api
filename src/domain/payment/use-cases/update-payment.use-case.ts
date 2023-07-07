import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { UpdatePaymentCommand } from "../../../application/payment/commands/update-payment.command";
import { PaymentRepository } from "../../../infrastructure/adapters/payment/repository/payment.repository";
import { Payment } from "../entity/payment";


export class UpdatePaymentUseCase extends UseCase<Payment | Payment[], PaymentRepository>  {
    handler({ idPayment, idTransaction}: UpdatePaymentCommand): PromiseResponse<Payment | Payment[]> {
		let item = new Payment(idTransaction)
		item.id = idPayment
        return this.repository.update(idPayment, item)
    } 
}
