import { Exception } from "../../base/Exception";

export class UnknownCategoryError extends Exception {
  constructor() {
    super('Unknown product category', 404);
  }
}