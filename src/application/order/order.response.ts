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
                ({ id, customerId, status, totalValue, items, customer }) =>
                    new Order(id, status, totalValue, customerId, items, customer)
            );
        }

        return new Order(
            data.id,
            data.status,
            data.totalValue,
            data.customerId,
            data.items,
            data.customer
        );
    }
    public get data() {
        return this.format(this._data);
    }
}
