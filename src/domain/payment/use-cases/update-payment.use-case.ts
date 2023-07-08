import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { UpdatePaymentCommand } from "../../../application/payment/commands/update-payment.command";
import { PaymentRepository } from "../../../infrastructure/adapters/payment/repository/payment.repository";
import { Payment } from "../entity/payment";
import { IResponse } from "../../base/interfaces";


export class UpdatePaymentUseCase extends UseCase<Payment | Payment[], PaymentRepository>  {
    async handler({ idPayment, status }: UpdatePaymentCommand): PromiseResponse<Payment | Payment[]> {
        const payment = <IResponse<Payment>>await this.repository.readById(idPayment);
        payment.data.status = status;
        return this.repository.updateStatus(idPayment, payment.data)
    }
}
