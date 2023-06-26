import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { Customer } from "../entity/customer";

export class DeleteCustomerUseCase {
    constructor(){}

    handler(customerRepository: CustomerRepository, id: string){
        const customer: Customer = customerRepository.getById(id);
        return customerRepository.delete(customer);
    }
}