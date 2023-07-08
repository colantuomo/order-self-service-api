import { v4 } from "uuid";
import { IPaymentService } from "../../domain/base/interfaces/IPaymentService";

type Input = {
  value: number
}

export class MercadoPagoService implements IPaymentService<Promise<{ transactionId: string }>, Input> {

  async submit(payload: Input) {
    return { transactionId: v4() }
  }

  async check(id: string) {
    return { transactionId: v4() }
  }

}
