import { ICommand } from "../../../domain/base/interfaces";

export interface UpdatePaymentStatusCommand extends ICommand {
  externalPaymentId: number;
}
