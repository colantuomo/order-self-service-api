import { Prisma, PrismaClient } from "@prisma/client";
import { Customer } from "../../../../domain/customer/entity/customer";

const prisma = new PrismaClient();
export class CustomerRepository {
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

    async update(updatedCustomer: Customer){
        return await prisma.customer.update({
            where: {
                id: updatedCustomer.id
            },
            data: {
                name: updatedCustomer.name,
                email: updatedCustomer.email,
                cpf: updatedCustomer.cpf.value
            },
        
        });
    }

    async get(){
        return await prisma.customer.findMany();
    }

    async getById(id: string){
        return await prisma.customer.findUniqueOrThrow({
            where: {
                id: id
            }
        });
    }

    async getByCPF(cpf: string){
        return await prisma.customer.findMany({
            where: {
                cpf: cpf
            }
        });
    }

    /**
     * 
     * @param customer 
     */
    async delete(customer: Customer){
        await prisma.customer.delete({
            where: {
                id: customer.id
            }
        })
    }
}
