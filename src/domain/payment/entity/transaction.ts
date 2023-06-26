import { uuid } from "uuidv4";
import { Order } from "../../order/entity/order";
import { ETransactionStatus } from "./transaction-status.enum";

export class Transaction{
    private _id: string;
    private _order: Order;
    private _status: ETransactionStatus;

    constructor(order: Order){
        this._id = uuid()
        this._order = order;
        this._status = ETransactionStatus.PENDENTE;
    }

    public get id(): string {
        return this._id;
    }

    public get order(): Order {
        return this._order;
    }
    
    public set order(value: Order) {
        this._order = value;
    }
    
    public get status(): ETransactionStatus {
        return this._status;
    }
    
    public set status(value: ETransactionStatus) {
        this._status = value;
    }    
}