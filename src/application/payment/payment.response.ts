import { Payment } from '../../domain/payment/entity/payment';

export class PaymentResponse {

    public static format(data: Payment) {
        return new Payment(
            data.orderId,
            data.externalPaymentId,
            data.id,
            data.status,
        );
    }

    public static formatList(data: Payment[]) {
        return data.map(
            ({ id, externalPaymentId, orderId, status }) =>
                new Payment(orderId, externalPaymentId, id, status)
        );
    }
}
