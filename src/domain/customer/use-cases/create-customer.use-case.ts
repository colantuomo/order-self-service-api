import { CustomerRepository } from "../../../adapters/customer/repository/customer.repository";
import { Customer } from "../entity/customer";
import { CreateCustomerCommand } from "../../../application/customer/commands/create-customer.command";

export class CreateCustomerUseCase{
    customerRepository: CustomerRepository;
    constructor(){
        this.customerRepository = new CustomerRepository()
    }

    handler(command: CreateCustomerCommand){
        const newCustomer: Customer = new Customer(command.name, command.cgc)

        const createdCustomer = this.customerRepository.save(newCustomer)
        return createdCustomer
    }
}