import axios from "axios";
import { IPaymentService } from "../../domain/base/interfaces/IPaymentService";
import { MercadoPagoCreatePaymentBody, MercadoPagoCreatePaymentResponse, MercadoPagoPaymentResponse } from "./interfaces/mercado-pago";

function http() {
  return axios.create(
    { baseURL: process.env.MERCADO_PAGO_BASE_URL }
  );
}

export class MercadoPagoService implements IPaymentService {

  async read(id: string): Promise<MercadoPagoPaymentResponse> {
    const { data } = await http().get(`/v1/payments/${id}`);
    return data;
  }

  async create(body: MercadoPagoCreatePaymentBody): Promise<MercadoPagoCreatePaymentResponse> {
    const { data } = await http().post(`/v1/payments`, {
      body
    });
    return data;
  }

}
