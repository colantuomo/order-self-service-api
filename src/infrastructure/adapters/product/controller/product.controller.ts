//TODO: create a better treatment for errors

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
  ReadProductByIdUseCase,
  ReadProductsUseCase,
  UpdateProductUseCase,
} from '../../../../domain/product/use-cases';

export const routes = Router();
const createProductUseCase = new CreateProductUseCase(new ProductRepository());
const deleteProductUseCase = new DeleteProductUseCase(new ProductRepository());
const readProductsUseCase = new ReadProductsUseCase(new ProductRepository());
const updateProductUseCase = new UpdateProductUseCase(new ProductRepository());
const readProductByIdUseCase = new ReadProductByIdUseCase(
  new ProductRepository()
);

routes.get('/', async (request, response, next) => {
  try {
    const command: ReadProductsCommand = {};
    const products = await readProductsUseCase.handler(command);
    return response.status(200).json(products);
  } catch (error) {
    return response.status(500).json(error);
  }
});

routes.get('/:id', async (request, response, next) => {
  try {
    const command: ReadProductByIdCommand = {
      id: request.params.id,
    };
    const product = await readProductByIdUseCase.handler(command);
    return response.status(201).json(product);
  } catch (error) {
    return response.status(500).json(error);
  }
});

routes.post('/', async (request, response, next) => {
  try {
    const command: CreateProductCommand = request.body;
    const product = await createProductUseCase.handler(command);
    return response.status(201).json(product);
  } catch (error) {
    return response.status(500).json(error);
  }
});

routes.put('/:id', async (request, response, next) => {
  try {
    const command: UpdateProductCommand = {
      id: request.params.id,
      product: request.body,
    };
    const product = await updateProductUseCase.handler(command);
    return response.status(201).json(product);
  } catch (error) {
    return response.status(500).json(error);
  }
});

routes.delete('/:id', async (request, response, next) => {
  try {
    const command: DeleteProductCommand = { id: request.params.id };
    await deleteProductUseCase.handler(command);
    return response.status(204).json();
  } catch (error) {
    return response.status(500).json(error);
  }
});

export const productRoutes = routes;
