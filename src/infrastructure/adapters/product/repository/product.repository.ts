import { prismaClient } from '../../../database/prisma';
import { Product } from '../../../../domain/product/entity/product';
import { IRepository } from '../../../types/repository';

export class ProductRepository implements IRepository<Product> {
  async create({ name, price, description }: Product) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
      },
    });
    return product as any as Product;
  }
  async read() {
    const product = await prismaClient.product.findMany();
    return product as any as Product;
  }
  async readById(id: string) {
    const product = await prismaClient.product.findFirst({
      where: { id },
    });
    return product as any as Product;
  }
  async update(id: string, { name, price, description }: Product) {
    const product = await prismaClient.product.update({
      where: { id },
      data: {
        name,
        price,
        description,
      },
    });
    return product as any as Product;
  }
  async delete(id: string) {
    const product = await prismaClient.product.delete({
      where: { id },
    });
    return product as any as Product;
  }
}
