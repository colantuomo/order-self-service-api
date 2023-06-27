import { ReadProductsCommand } from '../../../application/product/commands';
import { ProductRepository } from '../../../infrastructure/adapters/product/repository/product.repository';

export class ReadProductsUseCase {
  private _repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this._repository = repository;
  }
  handler({}: ReadProductsCommand) {
    return this._repository.read();
  }
}
