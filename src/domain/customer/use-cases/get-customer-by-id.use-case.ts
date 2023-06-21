import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";

export class GetCustomerByIdUseCase {
    constructor(){}

    handler(customerRepository: CustomerRepository, id: string){
        return customerRepository.getById(id);
    }
}
