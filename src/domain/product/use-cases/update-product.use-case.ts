import { UpdateProductCommand } from '../../../application/product/commands';
import { UseCase } from '../../base/UseCase';
import { Product } from '../entity/product';

export class UpdateProductUseCase extends UseCase<Product | Product[]> {
  handler({ id, product }: UpdateProductCommand) {
    return this.repository.update(id, product);
  }
}
