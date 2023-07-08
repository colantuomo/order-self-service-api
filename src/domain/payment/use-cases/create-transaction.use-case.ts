import { CreateTransactionCommand } from '../../../application/payment/commands/create-transaction.command';
import { MercadoPagoService } from '../../../infrastructure/services/mercado-pago.service';
import { UseCaseWithService } from '../../base/UseCaseWithService';
import { PromiseResponse } from '../../base/types/promise-response.type';
import { Payment } from '../entity/payment';

export class CreateTransactionUseCase extends UseCaseWithService<Payment | Payment[], MercadoPagoService> {
    async handler({ paymentId, value }: CreateTransactionCommand): PromiseResponse<Payment | Payment[]> {
        const { transactionId } = await this.service.submit({ value });
        const payment = new Payment(paymentId, transactionId);
        return this.repository.update(paymentId, payment);
    }
}
