import { v4 } from "uuid";
import { EPaymentStatus } from "./payment-status.enum";
import { IEntity } from "../../base/interfaces";

export class Payment implements IEntity {
    id: string;
    externalTransactionId: string | null;
    status: EPaymentStatus;

    constructor(externalId: string ){
        this.id = v4()
        this.externalTransactionId = null;
        this.status = EPaymentStatus.PENDENTE;
    }
}
