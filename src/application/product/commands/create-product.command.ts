import { ICommand } from "../../../domain/base/interfaces/ICommand";
import { ProductCategories } from "../../../domain/product/enums";

export interface CreateProductCommand extends ICommand {
  name: string;
  price: number;
  category: ProductCategories
  description?: string;
}
