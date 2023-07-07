import { Payment } from "../../domain/payment/entity/payment";
import { v4 } from "uuid";
import { PaymentRepository } from "../adapters/payment/repository/payment.repository";

export class MercadoPagoService {
  paymentRepository: PaymentRepository;

  constructor() {
    this.paymentRepository = new PaymentRepository()
  }

  async createTransaction(orderId: string, value: number) {
    const externalOrderId = await this.sendPayment(value);

  }

  async sendPayment(value: number) {
    // CALL Mercado Pago API

    return v4();
  }

}
