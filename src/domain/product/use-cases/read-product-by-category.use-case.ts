import { ReadyProductByCategoryCommand } from "../../../application/product/commands/read-product-by-category.command";
import { ProductRepository } from "../../../infrastructure/adapters/product/repository/product.repository";
import { UseCase } from "../../base/UseCase";
import { PromiseResponse } from "../../base/types/promise-response.type";
import { ProductCategory } from "../../value-objects/product-category.value-object";
import { Product } from "../entity/product";
import { UnknownCategoryError } from "../exceptions/unknown-category.exception";

export class ReadProductByCategory extends UseCase<Product | Product[], ProductRepository> {
  async handler({ category }: ReadyProductByCategoryCommand): PromiseResponse<Product | Product[]> {
    const productCategory = new ProductCategory(category);
    if (productCategory.isInvalid()) {
      throw new UnknownCategoryError();
    }
    return this.repository.readByCategory(productCategory.value);
  }
}