import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";

export class GetCustomerByCPFUseCase {
    customerRepository: CustomerRepository;
    constructor(){
        this.customerRepository = new CustomerRepository()
    }

    handler(customerRepository: CustomerRepository, cpf: string){
        return customerRepository.getByCPF(cpf);
    }
}
