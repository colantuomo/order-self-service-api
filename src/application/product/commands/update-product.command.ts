import { ICommand } from '../../../domain/base/interfaces/ICommand';
import { Product } from '../../../domain/product/entity/product';

export interface UpdateProductCommand extends ICommand {
  id: string;
  product: Product;
}
