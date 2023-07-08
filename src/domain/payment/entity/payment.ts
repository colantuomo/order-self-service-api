import { v4 } from "uuid";
import { EPaymentStatus } from "./payment-status.enum";
import { IEntity } from "../../base/interfaces";

export class Payment implements IEntity {
    id: string;
    externalPaymentId: string;
    status: EPaymentStatus;

    constructor(id = v4(), externalId: string, status: EPaymentStatus) {
        this.id = id
        this.externalPaymentId = externalId;
        this.status = status;
    }
}
