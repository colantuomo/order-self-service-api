import { uuid } from "uuidv4";
import { EPaymentStatus } from "./payment-status.enum";

export class Payment {
    id: string;
    orderId: string;
    externalOrderId: string | null;
    status: EPaymentStatus;

    constructor(orderId: string){
        this.id = uuid()
        this.orderId = orderId;
        this.externalOrderId = null;
        this.status = EPaymentStatus.PENDENTE;
    }
}
