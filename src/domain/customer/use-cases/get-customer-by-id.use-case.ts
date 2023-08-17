import { UseCase } from "../../base/UseCase";
import { Customer } from "../entity/customer";
import { ReadCustomerByIdCommand } from "../../../application/customer/commands/read-customer-by-id.command";
export class GetCustomerByIdUseCase extends UseCase<Customer>   {
    handler(command: ReadCustomerByIdCommand) {
        return this.repository.readById(command.id);
    }
}
