import { uuid } from "uuidv4";
import { ProductCategory } from "./product-category";

export class Product{
    private _id: string;
    private _name: string;
    private _category: ProductCategory;
    private _unit_value: number;
    private _quantity_stock: number;

    constructor(name: string, category: ProductCategory, unit_value: number, quantity_stock: number){
        this._id = uuid()
        this._name = name;
        this._category = category;
        this._unit_value = unit_value;
        this._quantity_stock = quantity_stock;
    }
    
    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get category(): ProductCategory {
        return this._category;
    }
    public set category(value: ProductCategory) {
        this._category = value;
    }

    public get unit_value(): number {
        return this._unit_value;
    }
    
    public set unit_value(value: number) {
        this._unit_value = value;
    }

    public get quantity_stock(): number {
        return this._quantity_stock;
    }
  
    public set quantity_stock(value: number) {
        this._quantity_stock = value;
    }
}