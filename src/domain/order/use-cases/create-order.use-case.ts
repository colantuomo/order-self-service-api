import { v4 } from 'uuid';
import { CreateOrderCommand } from '../../../application/order/commands/create-order.command';
import { UseCase } from '../../base/UseCase';
import { PromiseResponse } from '../../base/types/promise-response.type';
import { Order } from '../entity/order';
import { EOrderStatus } from '../entity/order-status.enum';
import { Product } from '../../product/entity/product';
import { OrderItem } from '../entity/order-item';
import { ProductCategories } from '../../product/enums';

export class CreateOrderUseCase extends UseCase<Order | Order[]> {
    handler({
        products,
        customerId,
    }: CreateOrderCommand): PromiseResponse<Order | Order[]>{
        let totalOrderValue = 0;

        if (products.length > 0){
            const totalOrderValue = products.reduce((acc, { price, quantity }) => {
                acc += price * quantity
                return acc;
            }, 0);
        }

        const order = new Order( 
            v4(), 
            EOrderStatus.PENDING_PAYMENT, 
            totalOrderValue,
            customerId
        );
        order.addItens(products.map((item)=>{
            return new OrderItem(new Product(item.id, '', 0, ProductCategories.FOOD, ''), item.quantity)
        }))
        return this.repository.create(order);
    }
}
