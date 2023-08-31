import { UpdatePaymentStatusCommand } from "../../../application/payment/commands/update-payment-status.command";
import { OrderRepository } from "../../../infrastructure/adapters/order/repository/order.repository";
import { PaymentRepository } from "../../../infrastructure/adapters/payment/repository/payment.repository";
import { MercadoPagoService } from "../../../infrastructure/services/mercado-pago.service";
import { UseCase } from "../../base/UseCase";
import { Order } from "../../order/entity/order";
import { EOrderStatus } from "../../order/entity/order-status.enum";
import { Payment } from "../entity/payment";
import { EPaymentStatus } from "../entity/payment-status.enum";

const mercadoPago = new MercadoPagoService();

export class UpdatePaymentStatusUseCase extends UseCase<Payment | Order, PaymentRepository>  {
  async handler({ externalPaymentId }: UpdatePaymentStatusCommand, orderRepository: OrderRepository) {
    const { status } = await mercadoPago.read(externalPaymentId);
    let paymentStatus = EPaymentStatus.PENDING;
    let orderStatus = EOrderStatus.RECEIVED;
    switch (status) {
      case 'approved':
        paymentStatus = EPaymentStatus.PAID;
        orderStatus = EOrderStatus.READY;
        break;
      case 'rejected':
        paymentStatus = EPaymentStatus.CANCELED;
        break;
    }
    const payment = await this.repository.updateStatusByExternalID(externalPaymentId, paymentStatus)
    const order = await orderRepository.readById(payment.orderId);
    order.status = orderStatus;
    return orderRepository.update(order.id, order);
  }
}
