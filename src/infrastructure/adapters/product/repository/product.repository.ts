import { prismaClient } from '../../../database/prisma';
import { Product } from '../../../../domain/product/entity/product';
import { IRepository } from '../../../types/repository';

export class ProductRepository implements IRepository<Product> {
  async create({ name, price, description }: Product) {
    return (await prismaClient.product.create({
      data: {
        name,
        price,
        description,
      },
    })) as any as Product;
  }
  async read() {
    return (await prismaClient.product.findMany()) as any as Product;
  }
  async readById(id: string) {
    return (await prismaClient.product.findFirst({
      where: { id },
    })) as any as Product;
  }
  async update(id: string, { name, price, description }: Product) {
    return (await prismaClient.product.update({
      where: { id },
      data: {
        name,
        price,
        description,
      },
    })) as any as Product;
  }
  async delete(id: string) {
    return (await prismaClient.product.delete({
      where: { id },
    })) as any as Product;
  }
}
