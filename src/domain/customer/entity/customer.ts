import { v4 } from "uuid";
import { Cpf } from "../../value-objects/cpf.value-object";

export class Customer {
    private _id: string;
    private _name: string;
    private _email: string;
    private _cpf: Cpf;

    constructor(name: string = "", cpf: string = "", email: string = "") {
        this._id = v4()
        this._name = name;
        this._cpf = new Cpf(cpf);
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

    public get cpf(): Cpf {
        return this._cpf;
    }

    public set cpf(value: string) {
        const cpf = new Cpf(value);
        this._cpf = cpf;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
}