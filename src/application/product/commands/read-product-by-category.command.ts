import { ICommand } from "../../../domain/base/interfaces/ICommand";
import { ProductCategories } from "../../../domain/product/enums";

export interface ReadyProductByCategoryCommand extends ICommand {
  category: ProductCategories | string;
}
