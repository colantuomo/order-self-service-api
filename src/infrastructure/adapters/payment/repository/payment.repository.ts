import { prismaClient } from '../../../database/prisma';
import { IRepository } from '../../../../domain/base/interfaces/IRepository';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';
import { Payment } from '../../../../domain/payment/entity/payment';
import { PromiseResponse } from '../../../../domain/base/types/promise-response.type';
import { PaymentResponse } from '../../../../application/payment/payment.response';

export class PaymentRepository implements IRepository<Payment | Payment[]> {
	constructor() {

	}

	updateExternalPaymentId(paymentId: string, externalPaymentId: string) {

	}

	async create(item: Payment): PromiseResponse<Payment | Payment[]> {
		throw new Error("Method not implemented.");
	}

	async read(...args: unknown[]): PromiseResponse<Payment | Payment[]> {
		const promise = prismaClient.payment.findMany();
		const payment = await handleRepositoryError(promise)
		const { data } = new PaymentResponse(payment);

		return { data };
	}

	async readById(id: string): PromiseResponse<Payment | Payment[]> {
		const promise = prismaClient.payment.findUniqueOrThrow({
			where: { id },
		});
		const payment = await handleRepositoryError(promise)
		const { data } = new PaymentResponse(payment);

		return { data };
	}

	async update(id: string, item: Payment): PromiseResponse<Payment | Payment[]> {
		const promise = prismaClient.payment.update({
			where: { id },
			data: {
				externalPaymentId: item.externalPaymentId
			}
		})
		const payment = await handleRepositoryError(promise);
		const { data } = new PaymentResponse(payment);
		return { data }
	}

	async updateStatus(id: string, item: Payment): PromiseResponse<Payment | Payment[]> {
		const promise = prismaClient.payment.update({
			where: { id },
			data: {
				status: item.status
			}
		})
		const payment = await handleRepositoryError(promise);
		const { data } = new PaymentResponse(payment);
		return { data }
	}

	updateItem(id: string, item: PaymentItem | PaymentItem[]): PromiseResponse<PaymentItem | PaymentItem[]> {
		throw new Error("Method not implemented.");
	}

	delete(id: string): PromiseResponse<Payment | Payment[]> {
		throw new Error("Method not implemented.");
	}
}
