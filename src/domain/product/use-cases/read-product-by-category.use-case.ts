import { ReadyProductByCategoryCommand } from "../../../application/product/commands/read-product-by-category.command";
import { ProductRepository } from "../../../infrastructure/adapters/product/repository/product.repository";
import { UseCase } from "../../base/UseCase";
import { ProductCategory } from "../../value-objects/product-category.value-object";
import { Product } from "../entity/product";
import { UnknownCategoryError } from "../exceptions/unknown-category.exception";

export class ReadProductByCategory extends UseCase<Product, ProductRepository> {
  async handler({ category }: ReadyProductByCategoryCommand) {
    const productCategory = new ProductCategory(category);
    if (productCategory.isInvalid()) {
      throw new UnknownCategoryError();
    }
    return this.repository.readByCategory(productCategory.value);
  }
}
