import { GetOrdersCommand } from '../../../application/order/commands/get-orders.command';
import { UseCase } from '../../base/UseCase';
import { Order } from '../entity/order';

export class GetOrdersUseCase extends UseCase<Order | Order[]> {
    async handler(command: GetOrdersCommand) {
        return this.repository.read();
    }
}
