import { ICommand } from "../../../domain/base/interfaces/ICommand";

export interface ReadProductByIdCommand extends ICommand {
  id: string;
}
