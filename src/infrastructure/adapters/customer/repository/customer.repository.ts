import { PrismaClient } from '@prisma/client';
import { Customer } from '../../../../domain/customer/entity/customer';
import { prismaClient } from '../../../database/prisma';
import { handleRepositoryError } from '../../../../application/ports/out/handle-repository-error';
import { CustomerResponse } from '../../../../application/customer/customer.response';
import { IRepository } from '../../../../domain/base/interfaces/IRepository';

const prisma = new PrismaClient();
export class CustomerRepository implements IRepository<Customer> {

    async create(item: Customer) {
        const customer = await handleRepositoryError(
            prismaClient.customer.create({
                data: {
                    name: item.name,
                    email: item.email,
                    cpf: item.cpf.value,
                },
            })
        );
        return CustomerResponse.format(customer);
    }

    async readById(id: string) {
        const promise = prisma.customer.findUniqueOrThrow({
            where: {
                id: id,
            },
        });
        const customer = await handleRepositoryError(promise);
        return CustomerResponse.format(customer);
    }

    async update(
        id: string,
        item: Customer
    ) {
        const promise = prismaClient.customer.update({
            where: { id },
            data: {
                name: item.name,
                email: item.email,
                cpf: item.cpf.value,
            },
        });
        const customer = await handleRepositoryError(promise);
        return CustomerResponse.format(customer);
    }
    async delete(id: string) {
        const promise = prismaClient.customer.delete({
            where: {
                id: id,
            },
        });
        const customer = await handleRepositoryError(promise);
        return CustomerResponse.format(customer);
    }

    async read() {
        const promise = prismaClient.customer.findMany();
        const products = await handleRepositoryError(promise);
        return CustomerResponse.formatList(products);
    }

    async readByCPF(cpf: string) {
        const promise = prisma.customer.findMany({
            where: {
                cpf: cpf,
            },
        });
        const customer = await handleRepositoryError(promise);
        return CustomerResponse.format(customer);
    }
}
