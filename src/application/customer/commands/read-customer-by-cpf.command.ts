import { ICommand } from "../../../domain/base/interfaces";

export interface ReadCustomerByCPFCommand extends ICommand {
	cpf: string
}
