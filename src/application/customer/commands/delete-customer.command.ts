import { ICommand } from "../../../domain/base/interfaces";

export interface DeleteCustomerCommand extends ICommand {
	id: string
}
