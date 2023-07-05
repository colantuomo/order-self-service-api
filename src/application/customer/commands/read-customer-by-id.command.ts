import { ICommand } from "../../../domain/base/interfaces";

export interface ReadCustomerByIdCommand extends ICommand {
	id: string
}
