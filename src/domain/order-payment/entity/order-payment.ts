import { IEntity } from "../../base/interfaces";

type PaymentInfos = {
  pix: {
    qrCode?: string;
    paymentUrl?: string;
    qrCodeBase64?: string;
  }
}

export class OrderPayment implements IEntity {
  id: string;
  paymentId: string;
  externalPaymentId: number;
  paymentInfo: PaymentInfos

  constructor(
    id: string,
    paymentId: string,
    externalPaymentId: number,
    paymentInfo: PaymentInfos
  ) {
    this.id = id;
    this.paymentId = paymentId;
    this.externalPaymentId = externalPaymentId;
    this.paymentInfo = paymentInfo;
  }
}
