import { UpdateCustomerCommand } from "../../../application/customer/commands/update-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { Customer } from "../entity/customer";

export class UpdateCustomerUseCase {
    constructor(){}

    handler(customerRepository: CustomerRepository, id: string, body: UpdateCustomerCommand){
        const customer: Customer = customerRepository.getById(id);
        customer.name = body.name
        customer.cpf = body.cpf
        customer.email = body.email
        
        return customerRepository.update(customer)
    } 
}