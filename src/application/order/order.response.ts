import { Order } from '../../domain/order/entity/order';

export class OrderResponse {

    public static format(data: Order) {
        return new Order(
            data.id,
            data.status,
            data.totalValue,
            data.createdAt,
            data.customerId,
            data.items,
            data.customer,
            data.payment
        );
    }

    public static formatList(data: Order[]) {
        return data.map(
            ({ id, customerId, status, totalValue, createdAt, items, customer, payment }) =>
                new Order(id, status, totalValue, createdAt, customerId, items, customer, payment)
        );
    }
}
