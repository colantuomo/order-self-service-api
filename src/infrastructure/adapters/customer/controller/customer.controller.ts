import express from 'express';
import { CreateCustomerCommand } from '../../../application/customer/commands/create-customer.command';
import { CreateCustomerUseCase } from '../../../domain/customer/use-cases/create-customer.use-case';
import { UpdateCustomerCommand } from '../../../application/customer/commands/update-customer.command';
export const routes = express.Router();

const createCustomerUserCase = new CreateCustomerUseCase()
//Get
//GetById
//GetByCPF (CGC)
//PostCreate
//PutUpdate
//Delete
routes.post('/', (request, response, next)=>{
    const body: CreateCustomerCommand = request.body;
    const createCustomer = createCustomerUserCase.handler(body)
    return response.status(201).json(createCustomer)
})

routes.put('/:id', (request, response, next)=>{
    const body: UpdateCustomerCommand = request.body;
    const createCustomer = createCustomerUserCase.handler(body)
    return response.status(201).json(createCustomer)
})