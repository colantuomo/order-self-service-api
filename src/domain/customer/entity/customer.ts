import { v4 } from "uuid";

export class Customer{
    private _id: string;
    private _name: string;
    private _email: string;
    private _cpf: string;
    
    constructor(name: string = "", cpf: string = "", email: string = ""){
        this._id = v4()
        this._name = name;
        this._cpf = cpf;
        this._email = email;
    }    

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(value: string) {
        this._cpf = value;
    }
    
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }    
}