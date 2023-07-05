import { DeleteCustomerCommand } from "../../../application/customer/commands/delete-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Customer } from "../entity/customer";

export class DeleteCustomerUseCase extends UseCase<Customer | Customer[], CustomerRepository>   {
    handler(command: DeleteCustomerCommand): PromiseResponse<Customer | Customer[]> {
        return this.repository.delete(command.id);
    }
}