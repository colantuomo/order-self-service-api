import { uuid } from "uuidv4";
import { EOrderStatus } from "./order-status.enum";
import { OrderItem } from "./order-item";
import { IEntity } from "../../base/interfaces";
import { Customer } from "../../customer/entity/customer";

export class Order implements IEntity{
    id: string;
    customer?: Customer;
    createdAt: Date;
    status: EOrderStatus;
    itens: Array<OrderItem>;
    total_value: number;
    
    constructor(id: string, customer?: Customer){
        this.id = uuid();
        if (customer !== null){
            this.customer = customer;
        }
        this.createdAt = new Date();
        this.status = EOrderStatus.PENDENTE;
        this.total_value = 0;
        this.itens = [];
    }
}
