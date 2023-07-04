import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Customer } from "../entity/customer";
import { ReadCustomerByIdCommand } from "../../../application/customer/commands/read-customer-by-id.command";
export class GetCustomerByIdUseCase extends UseCase<Customer | Customer[]>   {
    handler(command: ReadCustomerByIdCommand): PromiseResponse<Customer | Customer[]> {
        return this.repository.readById(command.id);
    }
}
