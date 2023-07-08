import { v4 } from "uuid";
import { EPaymentStatus } from "./payment-status.enum";
import { IEntity } from "../../base/interfaces";

export class Payment implements IEntity {
    id: string;
    externalTransactionId: string;
    status: EPaymentStatus;

    constructor(id = v4(), externalId: string) {
        this.id = id
        this.externalTransactionId = externalId;
        this.status = EPaymentStatus.PENDING;
    }
}
