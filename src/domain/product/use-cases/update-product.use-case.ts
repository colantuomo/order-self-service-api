import { UpdateProductCommand } from '../../../application/product/commands';
import { ProductRepository } from '../../../infrastructure/adapters/product/repository/product.repository';

export class UpdateProductUseCase {
  private _repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this._repository = repository;
  }
  handler({ id, product }: UpdateProductCommand) {
    return this._repository.update(id, product);
  }
}
