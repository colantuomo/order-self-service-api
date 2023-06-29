import { Exception } from "../../base/Exception";

export class ProductIdNotFoundException extends Exception {
  constructor() {
    super('Product ID not found', 404);
  }
}