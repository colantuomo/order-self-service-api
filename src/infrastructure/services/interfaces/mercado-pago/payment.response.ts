export type MercadoPagoStatus = 'pending' | 'approved' | 'authorized' | 'in_process' | 'in_mediation' | 'rejected' | 'cancelled' | 'refunded' | 'charged_back';

export interface MercadoPagoPaymentResponse {
  id: number;
  date_created: string;
  date_approved: null;
  date_last_updated: string;
  date_of_expiration: string;
  money_release_date: null;
  money_release_status: null;
  operation_type: string;
  issuer_id: string;
  payment_method_id: string;
  payment_type_id: string;
  payment_method: PaymentMethod;
  status: MercadoPagoStatus;
  status_detail: string;
  currency_id: string;
  description: string;
  live_mode: boolean;
  sponsor_id: null;
  authorization_code: null;
  money_release_schema: null;
  taxes_amount: number;
  counter_currency: null;
  brand_id: null;
  shipping_amount: number;
  build_version: string;
  pos_id: null;
  store_id: null;
  integrator_id: null;
  platform_id: null;
  corporation_id: null;
  payer: MercadoPagoPaymentResponsePayer;
  collector_id: number;
  marketplace_owner: null;
  metadata: Card;
  additional_info: AdditionalInfo;
  order: Card;
  external_reference: null;
  transaction_amount: number;
  transaction_amount_refunded: number;
  coupon_amount: number;
  differential_pricing_id: null;
  financing_group: null;
  deduction_schema: null;
  callback_url: null;
  installments: number;
  transaction_details: TransactionDetails;
  fee_details: any[];
  charges_details: any[];
  captured: boolean;
  binary_mode: boolean;
  call_for_authorize_id: null;
  statement_descriptor: null;
  card: Card;
  notification_url: null;
  refunds: any[];
  processing_mode: string;
  merchant_account_id: null;
  merchant_number: null;
  acquirer_reconciliation: any[];
  point_of_interaction: PointOfInteraction;
  accounts_info: null;
  tags: null;
}

export interface AdditionalInfo {
  available_balance: null;
  nsu_processadora: null;
  authentication_code: null;
}

export interface Card {
}

export interface MercadoPagoPaymentResponsePayer {
  first_name: null;
  last_name: null;
  email: string;
  identification: Identification;
  phone: Phone;
  type: null;
  entity_type: null;
  id: string;
}

export interface Identification {
  number: null | string;
  type: null | string;
}

export interface Phone {
  area_code: null;
  number: null;
  extension: null;
}

export interface PaymentMethod {
  id: string;
  type: string;
  issuer_id: string;
}

export interface PointOfInteraction {
  type: string;
  business_info: BusinessInfo;
  location: Location;
  application_data: ApplicationData;
  transaction_data: TransactionData;
}

export interface ApplicationData {
  name: null;
  version: null;
}

export interface BusinessInfo {
  unit: string;
  sub_unit: string;
}

export interface Location {
  state_id: null;
  source: null;
}

export interface TransactionData {
  qr_code: string;
  bank_transfer_id: null;
  transaction_id: null;
  e2e_id: null;
  financial_institution: null;
  ticket_url: string;
  bank_info: BankInfo;
  qr_code_base64: string;
}

export interface BankInfo {
  payer: BankInfoPayer;
  collector: Collector;
  is_same_bank_account_owner: null;
  origin_bank_id: null;
  origin_wallet_id: null;
}

export interface Collector {
  account_id: null;
  long_name: null;
  account_holder_name: string;
  transfer_account_id: null;
}

export interface BankInfoPayer {
  account_id: null;
  id: null;
  long_name: null;
  account_holder_name: null;
  identification: Identification;
  external_account_id: null;
}

export interface TransactionDetails {
  payment_method_reference_id: null;
  acquirer_reference: null;
  net_received_amount: number;
  total_paid_amount: number;
  overpaid_amount: number;
  external_resource_url: null;
  installment_amount: number;
  financial_institution: null;
  payable_deferral_period: null;
  bank_transfer_id: null;
  transaction_id: null;
}

