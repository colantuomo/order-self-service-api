import { ICommand } from "../../../domain/base/interfaces/ICommand";

export interface CreateProductCommand extends ICommand {
  name: string;
  price: number;
  description?: string;
}
