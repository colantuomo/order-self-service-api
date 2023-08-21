import { DeleteCustomerCommand } from "../../../application/customer/commands/delete-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { UseCase } from "../../base/UseCase";
import { Customer } from "../entity/customer";

export class DeleteCustomerUseCase extends UseCase<Customer, CustomerRepository>   {
    handler(command: DeleteCustomerCommand) {
        return this.repository.delete(command.id);
    }
}
