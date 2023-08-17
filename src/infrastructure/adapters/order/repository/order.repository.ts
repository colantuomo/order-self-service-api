import { Prisma } from '@prisma/client';
import { OrderResponse } from '../../../../application/order/order.response';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';
import { IRepository } from '../../../../domain/base/interfaces';
import { Order } from '../../../../domain/order/entity/order';
import { prismaClient } from '../../../database/prisma';
import { EPaymentStatus } from '../../../../domain/payment/entity/payment-status.enum';

export class OrderRepository implements IRepository<Order> {

    async create(item: Order) {
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
            payment: {
                create: {
                    amount: item.totalValue,
                    status: EPaymentStatus.PENDING
                }
            }
        };

        let promise = prismaClient.order.create({
            data: newOrder, include: {
                payment: true
            }
        });
        const order = await handleRepositoryError(promise);
        return OrderResponse.format(order as unknown as Order);
    }

    async read() {
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
                payment: true
            },
        });
        const order = await handleRepositoryError(promise);
        return OrderResponse.formatList(order as unknown as Order[]);
    }

    async readById(id: string) {
        const promise = prismaClient.order.findUniqueOrThrow({
            where: { id },
        });
        const order = await handleRepositoryError(promise);
        return OrderResponse.format(order as Order);
    }

    async update(
        id: string,
        item: Order
    ) {
        const promise = prismaClient.order.update({
            data: {
                createdAt: item.createdAt,
                id: item.id,
                status: item.status,
                totalValue: item.totalValue,
                customerId: item.customerId
            },
            where: { id },
        });
        const order = await handleRepositoryError(promise);
        return OrderResponse.format(order as Order);
    }

    async delete(id: string) {
        const promise = prismaClient.order.delete({
            where: { id },
        });
        const order = await handleRepositoryError(promise);
        return OrderResponse.format(order as Order);
    }
}
