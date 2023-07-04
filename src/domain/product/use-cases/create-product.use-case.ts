import { CreateProductCommand } from '../../../application/product/commands';
import { UseCase } from '../../base/UseCase';
import { ProductCategory } from '../../value-objects/product-category.value-object';
import { Product } from '../entity/product';
import { UnknownCategoryError } from '../exceptions/unknown-category.exception';

export class CreateProductUseCase extends UseCase<Product | Product[]> {
  async handler({ name, price, category }: CreateProductCommand) {
    const productCategory = new ProductCategory(category);
    if (productCategory.isInvalid()) {
      throw new UnknownCategoryError();
    }
    const product = new Product('', name, price, category);
    return this.repository.create(product);
  }
}
