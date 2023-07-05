import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { Customer } from "../entity/customer";
import { ReadCustomerByCPFCommand } from "../../../application/customer/commands/read-customer-by-cpf.command";
import { CustomerRepository } from "../../../infrastructure/adapters/customer/repository/customer.repository";

export class GetCustomerByCPFUseCase extends UseCase<Customer | Customer[], CustomerRepository>   {
    handler(command: ReadCustomerByCPFCommand): PromiseResponse<Customer | Customer[]> {
        return this.repository.readByCPF(command.cpf);
    }
}
