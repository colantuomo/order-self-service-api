import { Product } from "../../product/entity/product";


export class OrderItem {
    private _product: Product;
    private _unit_value: number;
    private _quantity: number;
    private _total_value: number;

    constructor(product: Product, quantity: number){
        this._product = product;
        this._unit_value = product.price;
        this._quantity = quantity;
        this._total_value = this.unit_value * this.quantity;
    }
   
    public get product(): Product {
        return this._product;
    }

    public set product(value: Product) {
        this._product = value;
    }

    public get unit_value(): number {
        return this._unit_value;
    }

    public set unit_value(value: number) {
        this._unit_value = value;
    }   

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(value: number) {
        if (value < 0){
            this._quantity = 0
        } else {
            this._quantity = value;
        }
    }
   
    public get total_value(): number {
        return this._total_value;
    }

    public set total_value(value: number) {
        this._total_value = value;
    }
}