import { EOrderStatus } from './order-status.enum';
import { IEntity } from '../../base/interfaces';
import { OrderItem } from './order-item';

export class Order implements IEntity {
    id: string;
    customerId?: string;
    createdAt: Date;
    status: EOrderStatus;
    totalValue: number;
    items?: Array<OrderItem>;

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

    addItens(products: Array<OrderItem>){
        this.items = products;
    }
}
