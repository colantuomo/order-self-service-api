import { v4 } from 'uuid';
import { CreateOrderCommand } from '../../../application/order/commands/create-order.command';
import { UseCase } from '../../base/UseCase';
import { Order } from '../entity/order';
import { EOrderStatus } from '../entity/order-status.enum';
import { Product } from '../../product/entity/product';
import { OrderItem } from '../entity/order-item';
import { ProductRepository } from '../../../infrastructure/adapters/product/repository/product.repository';

function mergeArrays(inputProducts: any[], validatedProducts: Product[]) {
    return validatedProducts.map((item1) => {
        const { quantity } = inputProducts.find(
            (item2) => item2.id === item1.id
        );
        return { ...item1, quantity };
    });
}

export class CreateOrderUseCase extends UseCase<Order> {
    async handler(
        { products, customerId }: CreateOrderCommand,
        productRepository: ProductRepository
    ) {
        const ids = products.map(({ id }) => id);
        const data = await productRepository.read(ids);
        const validatedProducts = mergeArrays(products, data);

        let totalOrderValue = 0;

        if (validatedProducts.length > 0) {
            totalOrderValue = validatedProducts.reduce(
                (acc, { price, quantity }) => {
                    acc += price * quantity;
                    return acc;
                },
                0
            );
        }

        const order = new Order(
            v4(),
            EOrderStatus.RECEIVED,
            totalOrderValue,
            new Date(),
            customerId
        );

        order.addItens(
            validatedProducts.map((item) => {
                return new OrderItem(
                    new Product(
                        item.id,
                        item.name,
                        item.price,
                        item.category,
                        item.description
                    ),
                    item.quantity
                );
            })
        );

        return this.repository.create(order);
    }
}
