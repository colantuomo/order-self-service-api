import { AdditionalInfo, Metadata } from "./shared";

export interface MercadoPagoCreatePaymentBody {
  additional_info: AdditionalInfo;
  description: string;
  external_reference: string;
  installments: number;
  metadata: Metadata;
  payer: MercadoPagoCreatePaymentBodyPayer;
  payment_method_id: string;
  token: string;
  transaction_amount: number;
}

export interface MercadoPagoCreatePaymentBodyPayer {
  entity_type: string;
  type: string;
  identification: Metadata;
}
