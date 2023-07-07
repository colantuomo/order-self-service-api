import { IResponse } from '../../domain/base/interfaces';
import { Payment } from '../../domain/payment/entity/payment';

export class PaymentResponse implements IResponse<Payment | Payment[]> {
    private _data: any;
    constructor(data: any) {
        this._data = data;
    }

    public format(data: Payment | any) {
        if (Array.isArray(data)) {
            return data.map(
                ({ orderId }) =>
                    new Payment(orderId)
            );
        }

        return new Payment(
            data.orderId
        );
    }
    public get data() {
        return this.format(this._data);
    }
}
