import { ICommand } from "../../../domain/base/interfaces";
import { EPaymentStatus } from "../../../domain/payment/entity/payment-status.enum";

export interface UpdatePaymentCommand extends ICommand {
	idPayment: string,
	status: EPaymentStatus
}
