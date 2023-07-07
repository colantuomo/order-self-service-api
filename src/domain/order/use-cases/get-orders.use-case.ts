import { GetOrdersCommand } from '../../../application/order/commands/get-orders.command';
import { UseCase } from '../../base/UseCase';
import { PromiseResponse } from '../../base/types/promise-response.type';
import { Order } from '../entity/order';

export class GetOrdersUseCase extends UseCase<Order | Order[]> {
    handler(command: GetOrdersCommand): PromiseResponse<Order | Order[]> {
        return this.repository.read();
    }
}
