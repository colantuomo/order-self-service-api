import { ReadCustomerCommand } from "../../../application/customer/commands/read-customer.command";
import { UseCase } from "../../base/UseCase";
import { Customer } from "../entity/customer";

export class GetCustomerUseCase extends UseCase<Customer | Customer[]>  {
    handler(_: ReadCustomerCommand){
        return this.repository.read();
    }
}
