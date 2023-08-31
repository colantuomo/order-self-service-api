import { AdditionalInfo, Identification } from "./shared";

export type MercadoPagoStatus = 'pending' | 'approved' | 'authorized' | 'in_process' | 'in_mediation' | 'rejected' | 'cancelled' | 'refunded' | 'charged_back';

export interface MercadoPagoPaymentResponse {
  id: number;
  date_created: string;
  date_approved: string;
  date_last_updated: string;
  money_release_date: string;
  payment_method_id: string;
  payment_type_id: string;
  status: MercadoPagoStatus;
  status_detail: string;
  currency_id: string;
  description: string;
  collector_id: number;
  payer: Payer;
  metadata: AdditionalInfo;
  additional_info: AdditionalInfo;
  transaction_amount: number;
  transaction_amount_refunded: number;
  coupon_amount: number;
  transaction_details: TransactionDetails;
  installments: number;
  card: AdditionalInfo;
}

export interface Payer {
  id: number;
  email: string;
  identification: Identification;
  type: string;
}

export interface TransactionDetails {
  net_received_amount: number;
  total_paid_amount: number;
  overpaid_amount: number;
  installment_amount: number;
}
