import { Prisma, PrismaClient } from "@prisma/client";
import { Customer } from "../../../../domain/customer/entity/customer";
import { prismaClient } from "../../../database/prisma";
import { handleRepositoryError } from "../../../../application/ports/out/handle-repository-error";
import { CustomerResponse } from "../../../../application/customer/customer.response";
import { IRepository } from "../../../../domain/base/interfaces/IRepository";
import { PromiseResponse } from "../../../../domain/base/types/promise-response.type";

const prisma = new PrismaClient();
export class CustomerRepository implements IRepository<Customer | Customer[]> {
	async create(item: Customer){
		const customer = await handleRepositoryError(prismaClient.customer.create({
			data: {
				name: item.name,
				email: item.email,
				cpf: item.cpf.value
			}
		}))
		const { data } = new CustomerResponse(customer)
		return { data }
	}

	async readById(id: string): PromiseResponse<Customer | Customer[]> {
		const promise = prisma.customer.findUniqueOrThrow({
			where: {
				id: id
			}
		});
		const customer = await handleRepositoryError(promise)
		const { data } = new CustomerResponse(customer);
		return { data };        
	}

	async update(id: string, item: Customer): PromiseResponse<Customer | Customer[]> {
		const promise = prismaClient.customer.update({
			where: { id },
			data: {
				name: item.name,
				email: item.email,
				cpf: item.cpf.value
			},
		});
		const customer = await handleRepositoryError(promise)
		const { data } = new CustomerResponse(customer);
		return { data };
	}
	async delete(id: string): PromiseResponse<Customer | Customer[]> {
		const promise = prismaClient.customer.delete({
			where: {
				id: id
			}
		})
		const customer = await handleRepositoryError(promise)
		const { data } = new CustomerResponse(customer);
		return { data };
	}
	async new(newCustomer: Customer){
		let dbCustomer: Prisma.CustomerCreateInput = {
			id: newCustomer.id,
			name: newCustomer.name,
			email: newCustomer.email,
			cpf: newCustomer.cpf.value
		}
		const customer = await prisma.customer.create({ data: dbCustomer })
		return customer
	}

	async read() {
		const promise = prismaClient.customer.findMany();
		const product = await handleRepositoryError(promise)
		const { data } = new CustomerResponse(product);
		return { data };
	}
	async readByCPF(cpf: string): PromiseResponse<Customer | Customer[]> {
		const promise = prisma.customer.findMany({
			where: {
				cpf: cpf
			}
		});
		const customer = await handleRepositoryError(promise)
		const { data } = new CustomerResponse(customer);
		return { data };        
	}
}
