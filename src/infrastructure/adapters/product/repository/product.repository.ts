import { prismaClient } from '../../../database/prisma';
import { Product } from '../../../../domain/product/entity/product';
import { IRepository } from '../../../../domain/base/interfaces/IRepository';
import { ProductResponse } from '../../../../application/product/product.reponse';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';

export class ProductRepository implements IRepository<Product | Product[]> {
  async create({ name, price, description }: Product) {
    const promise = prismaClient.product.create({
      data: {
        name,
        price,
        description,
      },
    });
    const product = await handleRepositoryError(promise)
    const { data } = new ProductResponse(product);
    return { data };
  }
  async read() {
    const promise = prismaClient.product.findMany();
    const product = await handleRepositoryError(promise)
    const { data } = new ProductResponse(product);
    return { data };
  }
  async readById(id: string) {
    const promise = prismaClient.product.findUniqueOrThrow({
      where: { id },
    });
    const product = await handleRepositoryError(promise)
    const { data } = new ProductResponse(product);
    return { data };
  }
  async update(id: string, { name, price, description }: Product) {
    const promise = prismaClient.product.update({
      where: { id },
      data: {
        name,
        price,
        description,
      },
    });
    const product = await handleRepositoryError(promise)
    const { data } = new ProductResponse(product);
    return { data };
  }
  async delete(id: string) {
    const promise = prismaClient.product.delete({
      where: { id },
    });
    await handleRepositoryError(promise)
    return { data: null };
  }
}
