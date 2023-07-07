import { CreateCustomerCommand } from "../../../application/customer/commands/create-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Cpf } from "../../value-objects/cpf.value-object";
import { Email } from "../../value-objects/email.value-object";

import { Customer } from "../entity/customer";
import { CPFError } from "../exception/cpf.exception";
import { EmailError } from "../exception/email.exception";


export class CreateCustomerUseCase extends UseCase<Customer | Customer[], CustomerRepository>  {
    async handler(command: CreateCustomerCommand): PromiseResponse<Customer | Customer[]> {
        const cpf = new Cpf(command.cpf);
        if (cpf.isInvalid()){
            throw new CPFError();
        }

        const email = new Email(command.email);
        if (email.isInvalid()){
            throw new EmailError();
        }

        const newCustomer: Customer = new Customer('', command.name, command.email, cpf)
        return this.repository.create(newCustomer);
    }
}