import { Exception } from "../../../domain/base/Exception";

export class RepositoryException extends Exception {
  constructor(message?: string, statusCode?: number) {
    super(message ?? 'An error occurred', statusCode ?? 500);
  }
}
