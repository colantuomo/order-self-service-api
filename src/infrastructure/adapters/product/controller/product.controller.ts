import { Router } from 'express';
import { ProductRepository } from '../repository/product.repository';
import {
  CreateProductCommand,
  DeleteProductCommand,
  ReadProductByIdCommand,
  ReadProductsCommand,
  UpdateProductCommand,
} from '../../../../application/product/commands';
import {
  CreateProductUseCase,
  DeleteProductUseCase,
  ReadProductByCategory,
  ReadProductByIdUseCase,
  ReadProductsUseCase,
  UpdateProductUseCase,
} from '../../../../domain/product/use-cases';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';
import { ReadyProductByCategoryCommand } from '../../../../application/product/commands/read-product-by-category.command';

export const routes = Router();

const repository = new ProductRepository();
const createProductUseCase = new CreateProductUseCase(repository);
const deleteProductUseCase = new DeleteProductUseCase(repository);
const readProductsUseCase = new ReadProductsUseCase(repository);
const updateProductUseCase = new UpdateProductUseCase(repository);
const readProductByIdUseCase = new ReadProductByIdUseCase(repository);
const readProductByCategory = new ReadProductByCategory(repository);

routes.get('/', async (request, response, next) => {
  const command: ReadProductsCommand = {};
  const promise = readProductsUseCase.handler(command);
  return handleExpressControllerError(promise, response);
});

routes.get('/:id', async (request, response, next) => {
  const command: ReadProductByIdCommand = {
    id: request.params.id,
  };
  const promise = readProductByIdUseCase.handler(command);
  return handleExpressControllerError(promise, response);
});

routes.post('/', async (request, response, next) => {
  const command: CreateProductCommand = request.body;
  const promise = createProductUseCase.handler(command);
  return handleExpressControllerError(promise, response);
});

routes.put('/:id', async (request, response, next) => {
  const command: UpdateProductCommand = {
    id: request.params.id,
    product: request.body,
  };
  const promise = updateProductUseCase.handler(command);
  return handleExpressControllerError(promise, response);
});

routes.delete('/:id', async (request, response, next) => {
  const command: DeleteProductCommand = { id: request.params.id };
  const promise = deleteProductUseCase.handler(command);
  return handleExpressControllerError(promise, response);
});

routes.get('/category/:category', async (request, response, next) => {
  const command: ReadyProductByCategoryCommand = { category: request.params.category.toUpperCase() };
  const promise = readProductByCategory.handler(command);
  return handleExpressControllerError(promise, response);
});

export const productRoutes = routes;
