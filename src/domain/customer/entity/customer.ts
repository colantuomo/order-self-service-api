import { v4 } from "uuid";
import { Cpf } from "../../value-objects/cpf.value-object";
import { IEntity } from "../../base/interfaces";

const validCpf = false
export class Customer implements IEntity {
    id: string;
    name: string;
    email: string;
    cpf: Cpf;
  
    constructor(id: string, name: string, email: string, cpf: string) {
        this.id = id;   
        this.name = name;
        this.email = email;
        this.cpf = new Cpf(cpf);
        if (validCpf && this.cpf.isInvalid()){
            this.cpf.throwError();
        }
    }
}