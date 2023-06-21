import express from 'express';
import { CreateCustomerUseCase } from '../../../../domain/customer/use-cases/create-customer.use-case';
import { CreateCustomerCommand } from '../../../../application/customer/commands/create-customer.command';
import { UpdateCustomerCommand } from '../../../../application/customer/commands/update-customer.command';
import { CustomerRepository } from '../repository/customer.repository';
import { UpdateCustomerUseCase } from '../../../../domain/customer/use-cases/update-customer.use-case';
import { DeleteCustomerUseCase } from '../../../../domain/customer/use-cases/delete-customer.use-case';
import { GetCustomerByIdUseCase } from '../../../../domain/customer/use-cases/get-customer-by-id.use-case';
export const routes = express.Router();

const createCustomerUserCase = new CreateCustomerUseCase()
const updateCustomerUserCase = new UpdateCustomerUseCase()
const deleteCustomerUserCase = new DeleteCustomerUseCase()
const getCustomerByIdUseCase = new GetCustomerByIdUseCase()
const customerRepository = new CustomerRepository()
//Get
//GetById
//GetByCPF (CGC)
//PostCreate
//PutUpdate
//Delete
routes.get('/', (request, response, next)=>{
    return 
})

routes.get('/:id', (request, response, next)=>{
    
})

routes.get('/:cpf/cpf', (request, response, next)=>{
    
})

routes.post('/', (request, response, next)=>{
    const body: CreateCustomerCommand = request.body;
    const createCustomer = createCustomerUserCase.handler(customerRepository, body)
    return response.status(201).json(createCustomer)
})

routes.put('/:id', (request, response, next)=>{
    const body: UpdateCustomerCommand = request.body;
    const id: string = request.params.id
    const updatedCustomer = updateCustomerUserCase.handler(customerRepository, id, body)
    return response.status(201).json(updatedCustomer)
})

routes.delete('/:id', (request, response, next)=>{
    const id: string = request.params.id
    deleteCustomerUserCase.handler(customerRepository, id)
    return response.status(204)
})