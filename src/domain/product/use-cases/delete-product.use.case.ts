import { DeleteProductCommand } from '../../../application/product/commands';
import { ProductRepository } from '../../../infrastructure/adapters/product/repository/product.repository';

export class DeleteProductUseCase {
  private _repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this._repository = repository;
  }
  handler({ id }: DeleteProductCommand) {
    return this._repository.delete(id);
  }
}
