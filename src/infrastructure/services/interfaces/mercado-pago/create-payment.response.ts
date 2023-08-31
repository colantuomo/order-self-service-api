import { AdditionalInfo, Identification, Metadata, TransactionDetails } from "./shared";

export interface MercadoPagoCreatePaymentResponse {
  id: number;
  date_created: string;
  date_approved: string;
  date_last_updated: string;
  money_release_date: string;
  issuer_id: number;
  payment_method_id: string;
  payment_type_id: string;
  status: string;
  status_detail: string;
  currency_id: string;
  description: string;
  taxes_amount: number;
  shipping_amount: number;
  collector_id: number;
  payer: MercadoPagoCreatePaymentPayer;
  metadata: Metadata;
  additional_info: AdditionalInfo;
  external_reference: string;
  transaction_amount: number;
  transaction_amount_refunded: number;
  coupon_amount: number;
  transaction_details: TransactionDetails;
  fee_details: FeeDetail[];
  statement_descriptor: string;
  installments: number;
  card: Card;
  notification_url: string;
  processing_mode: string;
  point_of_interaction: PointOfInteraction;
}

export interface Card {
  first_six_digits: number;
  last_four_digits: number;
  expiration_month: number;
  expiration_year: number;
  date_created: string;
  date_last_updated: string;
  cardholder: Cardholder;
}

export interface Cardholder {
  name: string;
  identification: Identification;
}

export interface FeeDetail {
  type: string;
  amount: number;
  fee_payer: string;
}

export interface MercadoPagoCreatePaymentPayer {
  id: number;
  email: string;
  identification: Identification;
  type: string;
}

export interface PointOfInteraction {
  type: string;
  application_data: ApplicationData;
  transaction_data: TransactionData;
}

export interface ApplicationData {
  name: string;
  version: string;
}

export interface TransactionData {
  qr_code_base64: string;
  qr_code: string;
  ticket_url: string;
}
