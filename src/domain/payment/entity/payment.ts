import { v4 } from "uuid";
import { EPaymentStatus } from "./payment-status.enum";
import { IEntity } from "../../base/interfaces";

export class Payment implements IEntity {
    id: string;
    externalPaymentId: number;
    status: EPaymentStatus;
    orderId: string;

    constructor(orderId: string, externalId: number, id = v4(), status: EPaymentStatus = EPaymentStatus.PENDING) {
        this.id = id
        this.externalPaymentId = externalId;
        this.status = status;
        this.orderId = orderId;
    }
}
