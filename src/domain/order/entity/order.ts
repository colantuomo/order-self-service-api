import { EOrderStatus } from './order-status.enum';
import { IEntity } from '../../base/interfaces';
import { OrderItem } from './order-item';
import { Customer } from '../../customer/entity/customer';
import { Payment } from '../../payment/entity/payment';

export class Order implements IEntity {
    id: string;
    customerId?: string;
    createdAt?: Date;
    status: EOrderStatus;
    totalValue: number;
    items?: Array<OrderItem>;
    customer?: Customer;
    payment?: Payment;

    constructor(
        id: string,
        status: EOrderStatus,
        totalValue: number,
        createdAt?: Date,
        customerId?: string,
        items?: Array<OrderItem>,
        customer?: Customer,
        payment?: Payment
    ) {
        this.id = id;
        this.customerId = customerId;
        this.createdAt = createdAt;
        this.status = status;
        this.totalValue = totalValue;
        this.items = items;
        this.customer = customer;
        this.payment = payment;
    }

    addItens(products: Array<OrderItem>) {
        this.items = products;
    }
}
