import { ICommand } from "../../../domain/base/interfaces/ICommand";

export interface DeleteProductCommand extends ICommand {
  id: string;
}
