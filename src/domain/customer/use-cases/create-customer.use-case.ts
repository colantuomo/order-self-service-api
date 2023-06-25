import { Customer } from "../entity/customer";
import { CreateCustomerCommand } from "../../../application/customer/commands/create-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";

export class CreateCustomerUseCase{
    constructor(){}

    handler(customerRepository: CustomerRepository, command: CreateCustomerCommand){
        const newCustomer: Customer = new Customer(command.name, command.cpf, command.email)
        const createdCustomer = customerRepository.new(newCustomer)

        return createdCustomer
    }
}