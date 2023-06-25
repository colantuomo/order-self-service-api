import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { Customer } from "../entity/customer";

export class GetCustomerByCPFUseCase {
    customerRepository: CustomerRepository;
    constructor(){
        this.customerRepository = new CustomerRepository()
    }

    handler(customerRepository: CustomerRepository, cpf: string){
        return customerRepository.getByCPF(cpf).then((arrCustomers)=>{
            return arrCustomers.map((customer)=>{
                let foundCustomer = new Customer()
                if (customer !== null){
                    foundCustomer.id = customer.id;
                    foundCustomer.name = customer.name;
                    foundCustomer.cpf = customer.cpf;
                    foundCustomer.email = customer.email;
                }
                return foundCustomer
            })
        });
    }
}
