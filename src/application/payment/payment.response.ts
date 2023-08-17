import { Payment } from '../../domain/payment/entity/payment';

export class PaymentResponse {

    public static format(data: Payment) {
        return new Payment(
            data.id,
            data.externalPaymentId,
            data.status,
        );
    }

    public static formatList(data: Payment[]) {
        return data.map(
            ({ id, externalPaymentId, status }) =>
                new Payment(id, externalPaymentId, status)
        );
    }
}
