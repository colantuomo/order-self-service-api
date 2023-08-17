import { DeleteProductCommand } from '../../../application/product/commands';
import { UseCase } from '../../base/UseCase';
import { Product } from '../entity/product';

export class DeleteProductUseCase extends UseCase<Product> {
  handler({ id }: DeleteProductCommand) {
    return this.repository.delete(id);
  }
}
