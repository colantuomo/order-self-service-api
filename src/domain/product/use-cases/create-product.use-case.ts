import { CreateProductCommand } from '../../../application/product/commands';
import { ProductRepository } from '../../../infrastructure/adapters/product/repository/product.repository';
import { Product } from '../entity/product';

export class CreateProductUseCase {
  private _repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this._repository = repository;
  }
  handler({ name, price }: CreateProductCommand) {
    const product = new Product(name, price);
    return this._repository.create(product);
  }
}
