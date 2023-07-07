import { UseCaseWithService } from '../../base/UseCaseWithService';
import { PromiseResponse } from '../../base/types/promise-response.type';
import { Payment } from '../entity/payment';

export class GenerateTransactionUseCase extends UseCaseWithService<Payment | Payment[]> {
    handler(command: GetOrdersCommand): PromiseResponse<Payment | Payment[]> {
        const transactionId = await MercadoPagoService.createTransaction();
        return this.repository.updateId(transactionId);
    }
}
