import { IValueObject } from "../base/interfaces";
import { ProductCategories } from "../product/enums";

export class ProductCategory implements IValueObject<ProductCategories | string> {

  value: ProductCategories;

  constructor(value: ProductCategories | string) {
    this.value = value as ProductCategories;
  }

  isInvalid(): boolean {
    if (this.value === undefined) return true;

    const hasValue = ProductCategories[this.value as ProductCategories];
    return hasValue === undefined;
  }
}