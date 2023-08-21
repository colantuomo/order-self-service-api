import { CreateTransactionCommand } from '../../../application/payment/commands/create-transaction.command';
import { MercadoPagoService } from '../../../infrastructure/services/mercado-pago.service';
import { UseCaseWithService } from '../../base/UseCaseWithService';
import { Payment } from '../entity/payment';

export class CreateTransactionUseCase extends UseCaseWithService<Payment, MercadoPagoService> {
    async handler({ orderId, paymentId, value }: CreateTransactionCommand) {
        const { transactionId } = await this.service.submit({ value });
        const payment = new Payment(orderId, transactionId, paymentId);
        return this.repository.update(paymentId, payment);
    }
}
