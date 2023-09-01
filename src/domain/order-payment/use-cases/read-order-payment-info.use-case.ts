import { ReadOrderPaymentInfoCommand } from "../../../application/order-payment/commands/read-order-payment-info.command";
import { MercadoPagoService } from "../../../infrastructure/services/mercado-pago.service";
import { UseCaseWithService } from "../../base/UseCaseWithService";
import { OrderPayment } from "../entity/order-payment";

export class ReadOrderPaymentInfoUseCase extends UseCaseWithService<OrderPayment, MercadoPagoService> {
  async handler({ orderId, paymentId, externalPaymentId }: ReadOrderPaymentInfoCommand) {
    const externalPayment = await this.service?.read(externalPaymentId);
    const orderPayment = new OrderPayment(
      orderId,
      paymentId,
      externalPaymentId,
      {
        pix: {
          paymentUrl: externalPayment?.point_of_interaction.transaction_data.ticket_url,
          qrCode: externalPayment?.point_of_interaction.transaction_data.qr_code,
          qrCodeBase64: externalPayment?.point_of_interaction.transaction_data.qr_code_base64

        }
      }
    );
    return orderPayment
  }
}
