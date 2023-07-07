import { prismaClient } from '../../../database/prisma';
import { Product } from '../../../../domain/product/entity/product';
import { IRepository } from '../../../../domain/base/interfaces/IRepository';
import { ProductResponse } from '../../../../application/product/product.reponse';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';
import { ProductCategories } from '../../../../domain/product/enums';
import { RepositoryException } from '../../exceptions/repository.exception';

export class ProductRepository implements IRepository<Product | Product[]> {
    async create({ name, price, category, description }: Product) {
        const promise = prismaClient.product.create({
            data: {
                name,
                price,
                category,
                description,
            },
        });
        const product = await handleRepositoryError(promise);
        const { data } = new ProductResponse(product);
        return { data };
    }

    async read(ids?: string[]): Promise<{ data: Product[] }> {
        const where = {
            id: { in: ids },
        };
        const promise = prismaClient.product.findMany({ where });
        const products = await handleRepositoryError(promise);
        if (ids?.length && !products.length) {
            throw new RepositoryException('Products not founded', 404);
        }
        const { data } = new ProductResponse(products) as { data: Product[] };
        return { data };
    }

    async readById(id: string) {
        const promise = prismaClient.product.findUniqueOrThrow({
            where: { id },
        });
        const product = await handleRepositoryError(promise);
        const { data } = new ProductResponse(product);
        return { data };
    }

    async readByCategory(category: ProductCategories) {
        const promise = prismaClient.product.findMany({
            where: { category },
        });
        const product = await handleRepositoryError(promise);
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
        const product = await handleRepositoryError(promise);
        const { data } = new ProductResponse(product);
        return { data };
    }
    async delete(id: string) {
        const promise = prismaClient.product.delete({
            where: { id },
        });
        await handleRepositoryError(promise);
        return { data: null };
    }
}
