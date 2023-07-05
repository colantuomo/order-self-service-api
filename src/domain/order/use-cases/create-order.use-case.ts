import { v4 } from 'uuid';
import { CreateOrderCommand } from '../../../application/order/commands/create-order.command';
import { UseCase } from '../../base/UseCase';
import { PromiseResponse } from '../../base/types/promise-response.type';
import { Order } from '../entity/order';
import { EOrderStatus } from '../entity/order-status.enum';

export class CreateOrderUseCase extends UseCase<Order | Order[]> {
    handler({
        products,
        customerId,
    }: CreateOrderCommand): PromiseResponse<Order | Order[]> {
        const totalPerProduct = products.map(({ price, quantity }) => {
            return price * quantity;
        });

        const totalOrdeValue = totalPerProduct.reduce(
            (acc, value) => acc + value
        );

        const order = new Order(
            v4(),
            EOrderStatus.PENDING_PAYMENT,
            totalOrdeValue,
            customerId
        );
        return this.repository.create(order);
    }
}
