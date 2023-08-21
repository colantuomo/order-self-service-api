import { UseCase } from "../../base/UseCase";
import { Customer } from "../entity/customer";
import { ReadCustomerByCPFCommand } from "../../../application/customer/commands/read-customer-by-cpf.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";

export class GetCustomerByCPFUseCase extends UseCase<Customer, CustomerRepository>   {
    handler(command: ReadCustomerByCPFCommand) {
        return this.repository.readByCPF(command.cpf);
    }
}
