import { CreateCustomerCommand } from "../../../application/customer/commands/create-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Customer } from "../entity/customer";


export class CreateCustomerUseCase extends UseCase<Customer | Customer[], CustomerRepository>  {
    handler(command: CreateCustomerCommand): PromiseResponse<Customer | Customer[]> {
        const newCustomer: Customer = new Customer('', command.name, command.email, command.cpf)
        const createdCustomer = this.repository.create(newCustomer)

        return createdCustomer
    }
}