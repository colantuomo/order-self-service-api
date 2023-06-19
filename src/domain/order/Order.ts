import { uuid } from "uuidv4";
import { EOrderStatus } from "./order-status.enum";
import { OrderItem } from "./order-item";

export class Order {
    private _id: string;

    private _nome_cliente: string;
    
    private _valor_total: number;
    
    private _status: EOrderStatus;
    
    private _itens: Array<OrderItem>;
    
    constructor(nome_cliente: string = ""){
        this._id = uuid();
        this._nome_cliente = nome_cliente;
        this._valor_total = 0;
        this._status = EOrderStatus.ABERTO;
        this._itens = [];
    }
    public get id(): string {
        return this._id;
    }
    
    public get nome_cliente(): string {
        return this._nome_cliente;
    }
    
    public set nome_cliente(value: string) {
        this._nome_cliente = value;
    }
    
    public get valor_total(): number {
        return this._valor_total;
    }
    
    public set valor_total(value: number) {
        this._valor_total = value;
    }
    
    public get status(): EOrderStatus {
        return this._status;
    }
    
    public set status(value: EOrderStatus) {
        this._status = value;
    }
    
    public get itens(): Array<OrderItem> {
        return this._itens;
    }
    
    public set itens(value: Array<OrderItem>) {
        this._itens = value;
    }

}
