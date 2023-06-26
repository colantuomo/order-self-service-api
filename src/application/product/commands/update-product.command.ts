import { Product } from '../../../domain/product/entity/product';
export interface UpdateProductCommand {
  id: string;
  product: Product;
}
