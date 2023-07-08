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
                ({ id, externalPaymentId, status }) =>
                    new Payment(id, externalPaymentId, status)
            );
        }

        return new Payment(
            data.id,
            data.externalPaymentId,
            data.status,
        );
    }
    public get data() {
        return this.format(this._data);
    }
}
