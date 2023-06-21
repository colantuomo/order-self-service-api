import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";

export class GetCustomerUseCase {
    customerRepository: CustomerRepository;
    constructor(){
        this.customerRepository = new CustomerRepository()
    }

    handler(customerRepository: CustomerRepository){
        return customerRepository.get();
    }
}
