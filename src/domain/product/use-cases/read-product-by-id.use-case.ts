import { ReadProductByIdCommand } from '../../../application/product/commands';
import { ProductRepository } from '../../../infrastructure/adapters/product/repository/product.repository';

export class ReadProductByIdUseCase {
  private _repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this._repository = repository;
  }
  handler({ id }: ReadProductByIdCommand) {
    return this._repository.readById(id);
  }
}
