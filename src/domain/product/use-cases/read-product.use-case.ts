import { ReadProductsCommand } from '../../../application/product/commands';
import { UseCase } from '../../base/UseCase';
import { Product } from '../entity/product';

export class ReadProductsUseCase extends UseCase<Product | Product[]> {
    handler({ ids }: ReadProductsCommand) {
        return this.repository.read(ids);
    }
}
