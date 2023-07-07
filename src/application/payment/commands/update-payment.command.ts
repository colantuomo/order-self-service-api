import { ICommand } from "../../../domain/base/interfaces";

export interface UpdatePaymentCommand extends ICommand {
	idPayment: string,
	idTransaction: string
}