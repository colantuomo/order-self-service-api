import { CreateTransactionCommand } from '../../../application/payment/commands/create-transaction.command';
import { MercadoPagoService } from '../../../infrastructure/services/mercado-pago.service';
import { UseCaseWithService } from '../../base/UseCaseWithService';
import { Payment } from '../entity/payment';

export class CreateTransactionUseCase extends UseCaseWithService<Payment, MercadoPagoService> {
    async handler({ orderId, paymentId, transactionAmount, description, installments, payer, paymentMethodId }: CreateTransactionCommand) {
        const { id } = await this.service.create({
            transaction_amount: transactionAmount,
            description,
            installments,
            payer,
            payment_method_id: paymentMethodId,
        });
        const payment = new Payment(orderId, id, paymentId);
        return this.repository.update(paymentId, payment);
    }
}
