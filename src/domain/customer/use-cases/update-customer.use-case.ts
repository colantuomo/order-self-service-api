import { UpdateCustomerCommand } from "../../../application/customer/commands/update-customer.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";
import { UseCase } from "../../base/UseCase";
import { Customer } from "../entity/customer";

export class UpdateCustomerUseCase extends UseCase<Customer, CustomerRepository>  {
    handler({ id, customer }: UpdateCustomerCommand) {
        return this.repository.update(id, customer)
    }
}
