import { v4 } from "uuid";

export class Customer{
    private _id: string;
    private _name: string;
    private _cgc: string;
    
    constructor(name: string, cgc: string){
        this._id = v4()
        this._name = name;
        this._cgc = cgc
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

    public get cgc(): string {
        return this._cgc;
    }

    public set cgc(value: string) {
        this._cgc = value;
    }
}