import { prismaClient } from '../../../database/prisma';
import { IRepository } from '../../../../domain/base/interfaces/IRepository';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';
import { Payment } from '../../../../domain/payment/entity/payment';
import { PaymentResponse } from '../../../../application/payment/payment.response';
import { EPaymentStatus } from '../../../../domain/payment/entity/payment-status.enum';
import { PaymentStatus } from '@prisma/client';

export class PaymentRepository implements IRepository<Payment> {

	async create(item: Payment) {
		const promise = prismaClient.payment.create({
			data: {
				amount: 0, //TODO: Remove that amount from prisma schema
				status: item.status as PaymentStatus,
				externalPaymentId: item.externalPaymentId,
				order: {
					connect: {
						id: item.orderId,
					}
				}
			}
		});
		const payment = await handleRepositoryError(promise)
		return PaymentResponse.format(payment as unknown as Payment);
	}

	async read() {
		const promise = prismaClient.payment.findMany();
		const payment = await handleRepositoryError(promise)
		return PaymentResponse.formatList(payment as unknown as Payment[]);
	}

	async readById(id: string) {
		const promise = prismaClient.payment.findUniqueOrThrow({
			where: { id },
		});
		const payment = await handleRepositoryError(promise)
		return PaymentResponse.format(payment as unknown as Payment);
	}

	async update(id: string, item: Payment) {
		const promise = prismaClient.payment.update({
			where: { id },
			data: {
				externalPaymentId: item.externalPaymentId
			}
		})
		const payment = await handleRepositoryError(promise);
		return PaymentResponse.format(payment as unknown as Payment);
	}

	async updateStatusByExternalID(externalPaymentId: number, status: EPaymentStatus) {
		const paymentByExternalIDPromise = prismaClient.payment.findFirstOrThrow({
			where: {
				externalPaymentId,
			}
		});
		const paymentByExternalID = await handleRepositoryError(paymentByExternalIDPromise);
		const promise = prismaClient.payment.update({
			where: { id: paymentByExternalID?.id },
			data: {
				status: status
			}
		})
		const payment = await handleRepositoryError(promise);
		return PaymentResponse.format(payment as unknown as Payment);
	}

	async delete(id: string) {
		const promise = prismaClient.payment.delete({
			where: { id },
		})
		const payment = await handleRepositoryError(promise);
		return PaymentResponse.format(payment as unknown as Payment);
	}

	async readOrderPaymentStatus(orderId: string) {
		const promise = prismaClient.payment.findUniqueOrThrow({
			where: {
				orderId
			}
		});
		const payment = await handleRepositoryError(promise)
		return PaymentResponse.format(payment as unknown as Payment);
	}

	async readExternalPaymentInfo(id: string, externalPaymentId: number) {
		const promise = prismaClient.payment.findFirstOrThrow({
			where: {
				id,
				externalPaymentId
			}
		});
		const payment = await handleRepositoryError(promise)
		return PaymentResponse.format(payment as unknown as Payment);
	}
}
