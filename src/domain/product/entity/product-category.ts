import { uuid } from "uuidv4";

export class ProductCategory{
    private _id: string;
    private _name: string;

    constructor(name: string){
        this._id = uuid();
        this._name = name;
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

}