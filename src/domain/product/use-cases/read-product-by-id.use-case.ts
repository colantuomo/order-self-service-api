import { ReadProductByIdCommand } from '../../../application/product/commands';
import { UseCase } from '../../base/UseCase';
import { Product } from '../entity/product';

export class ReadProductByIdUseCase extends UseCase<Product | Product[]> {
  handler({ id }: ReadProductByIdCommand) {
    return this.repository.readById(id);
  }
}
