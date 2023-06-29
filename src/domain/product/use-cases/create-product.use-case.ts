import { CreateProductCommand } from '../../../application/product/commands';
import { UseCase } from '../../base/UseCase';
import { Product } from '../entity/product';

export class CreateProductUseCase extends UseCase<Product | Product[]> {
  handler({ name, price }: CreateProductCommand) {
    const product = new Product('', name, price);
    return this.repository.create(product);
  }
}
