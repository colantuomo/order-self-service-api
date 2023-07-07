import { ICommand } from "../../../domain/base/interfaces";

export interface CreateCustomerCommand extends ICommand{
    name: string,
    cpf: string,
    email: string
}
