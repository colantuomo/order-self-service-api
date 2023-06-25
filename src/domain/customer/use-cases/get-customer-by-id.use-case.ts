import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { Customer } from "../entity/customer";

export class GetCustomerByIdUseCase {
    constructor(){}

    async handler(customerRepository: CustomerRepository, id: string){
        return await customerRepository.getById(id).then((result)=>{
            let createdCustomer = new Customer()
            if (result !== null){
                createdCustomer.id = result.id;
                createdCustomer.name = result.name;
                createdCustomer.email = result.email;
                createdCustomer.cpf = result.cpf;
            }
            return createdCustomer
        });
    }
}
