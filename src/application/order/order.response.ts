import { IResponse } from '../../domain/base/interfaces';
import { Order } from '../../domain/order/entity/order';

export class OrderResponse implements IResponse<Order | Order[]> {
    private _data: any;
    constructor(data: any) {
        this._data = data;
    }

    public format(data: Order | any) {
        if (Array.isArray(data)) {
            return data.map(
                ({ id, customerId, status, totalValue, createdAt, items, customer, payment }) =>
                    new Order(id, status, totalValue, createdAt, customerId, items, customer, payment)
            );
        }

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
    public get data() {
        return this.format(this._data);
    }
}
