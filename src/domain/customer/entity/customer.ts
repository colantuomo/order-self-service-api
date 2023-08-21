import { v4 } from "uuid";
import { Cpf } from "../../value-objects/cpf.value-object";
import { IEntity } from "../../base/interfaces";

export class Customer implements IEntity {
    id: string;
    name: string;
    email: string;
    cpf: Cpf;

    constructor(name: string, email: string, cpf: Cpf, id: string = v4()) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
    }

    isInvalid() {
        return this.cpf.isInvalid()
    }
}
