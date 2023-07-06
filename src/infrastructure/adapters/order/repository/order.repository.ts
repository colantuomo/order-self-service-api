import { Prisma } from '@prisma/client';
import { OrderResponse } from '../../../../application/order/order.response';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';
import { IRepository } from '../../../../domain/base/interfaces';
import { PromiseResponse } from '../../../../domain/base/types/promise-response.type';
import { Order } from '../../../../domain/order/entity/order';
import { OrderItem } from '../../../../domain/order/entity/order-item';
import { prismaClient } from '../../../database/prisma';
import { ETransactionStatus } from '../../../../domain/payment/entity/transaction-status.enum';

export class OrderRepository{
    async create(item: Order): PromiseResponse<Order | Order[]> {
        if (item.items === undefined){
            item.items = []
        }

        let newOrder: Prisma.OrderCreateInput = {
            id: item.id,
            createdAt: item.createdAt,
            status: item.status,
            totalValue: item.totalValue,
            customer: {
                connect: {
                    id: item.customerId,
                }
            },
            items: {
                create: item.items.map((item) => ({ quantity: item.quantity, product: { connect: { id: item.product.id } } }))      
            },
            payment: {
                create: {
                    amount: item.totalValue,
                    status: ETransactionStatus.PENDENTE
                }
            }
        }

        let promise = prismaClient.order.create({ data: newOrder });
        const order = await handleRepositoryError(promise);
        const { data } = new OrderResponse(order);
        return { data };
    }
    async read(): PromiseResponse<Order | Order[]> {
        const promise = prismaClient.order.findMany();
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
