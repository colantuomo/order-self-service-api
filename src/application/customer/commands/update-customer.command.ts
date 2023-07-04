import { ICommand } from "../../../domain/base/interfaces";
import { Customer } from "../../../domain/customer/entity/customer";

export interface UpdateCustomerCommand extends ICommand{
    id: string,
    customer: Customer
}
