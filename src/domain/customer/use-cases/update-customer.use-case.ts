import { UpdateCustomerCommand } from "../../../application/customer/commands/update-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Customer } from "../entity/customer";

export class UpdateCustomerUseCase extends UseCase<Customer | Customer[], CustomerRepository>  {
    handler({ id, customer}: UpdateCustomerCommand): PromiseResponse<Customer | Customer[]> {
        return this.repository.update(id, customer)
    } 
}
