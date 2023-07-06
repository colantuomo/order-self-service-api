import { Prisma } from '@prisma/client';
import { OrderResponse } from '../../../../application/order/order.response';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';
import { IRepository } from '../../../../domain/base/interfaces';
import { PromiseResponse } from '../../../../domain/base/types/promise-response.type';
import { Order } from '../../../../domain/order/entity/order';
import { OrderItem } from '../../../../domain/order/entity/order-item';
import { prismaClient } from '../../../database/prisma';

export class OrderRepository implements IRepository<Order | Order[]> {
    async create(item: Order): PromiseResponse<Order | Order[]> {
        let customer = {};
        if (item.customerId) {
            customer = {
                connect: {
                    id: item?.customerId,
                },
            };
        }

        let newOrder: Prisma.OrderCreateInput = {
            id: item.id,
            createdAt: item.createdAt,
            status: item.status,
            totalValue: item.totalValue,
            customer,
            items: {
                create: item?.items?.map((item) => ({
                    quantity: item.quantity,
                    product: { connect: { id: item.product.id } },
                })),
            },
        };

        let promise = prismaClient.order.create({ data: newOrder });
        const order = await handleRepositoryError(promise);
        const { data } = new OrderResponse(order);
        return { data };
    }
    async read(): PromiseResponse<Order | Order[]> {
        const promise = prismaClient.order.findMany({
            include: {
                customer: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
                items: {
                    select: {
                        product: true,
                        quantity: true,
                    },
                },
            },
        });
        const order = await handleRepositoryError(promise);
        const { data } = new OrderResponse(order);
        return { data };
    }

    async readById(id: string): PromiseResponse<Order | Order[]> {
        const promise = prismaClient.order.findUniqueOrThrow({
            where: { id },
        });
        const order = await handleRepositoryError(promise);
        const { data } = new OrderResponse(order);
        return { data };
    }

    update(
        id: string,
        item: Order | Order[]
    ): PromiseResponse<Order | Order[]> {
        throw new Error('Method not implemented.');
    }

    updateItem(
        id: string,
        item: OrderItem | OrderItem[]
    ): PromiseResponse<OrderItem | OrderItem[]> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): PromiseResponse<Order | Order[]> {
        throw new Error('Method not implemented.');
    }
}
