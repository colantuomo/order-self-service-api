import { EOrderStatus } from './order-status.enum';
import { IEntity } from '../../base/interfaces';

export class Order implements IEntity {
    id: string;
    customerId?: string;
    createdAt: Date;
    status: EOrderStatus;
    totalValue: number;

    constructor(
        id: string,
        status: EOrderStatus,
        totalValue: number,
        customerId?: string
    ) {
        this.id = id;
        this.customerId = customerId;
        this.createdAt = new Date();
        this.status = status;
        this.totalValue = totalValue;
    }
}
