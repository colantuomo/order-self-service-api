import { EOrderStatus } from './order-status.enum';
import { IEntity } from '../../base/interfaces';
import { OrderItem } from './order-item';
import { Customer } from '../../customer/entity/customer';

export class Order implements IEntity {
    id: string;
    customerId?: string;
    createdAt: Date;
    status: EOrderStatus;
    totalValue: number;
    items?: Array<OrderItem>;
    customer?: Customer;

    constructor(
        id: string,
        status: EOrderStatus,
        totalValue: number,
        customerId?: string,
        items?: Array<OrderItem>,
        customer?: Customer
    ) {
        this.id = id;
        this.customerId = customerId;
        this.createdAt = new Date();
        this.status = status;
        this.totalValue = totalValue;
        this.items = items;
        this.customer = customer;
    }

    addItens(products: Array<OrderItem>) {
        this.items = products;
    }
}
