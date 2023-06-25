import express from 'express';
import { CreateCustomerUseCase } from '../../../../domain/customer/use-cases/create-customer.use-case';
import { CreateCustomerCommand } from '../../../../application/customer/commands/create-customer.command';
import { UpdateCustomerCommand } from '../../../../application/customer/commands/update-customer.command';
import { CustomerRepository } from '../repository/customer.repository';
import { UpdateCustomerUseCase } from '../../../../domain/customer/use-cases/update-customer.use-case';
import { DeleteCustomerUseCase } from '../../../../domain/customer/use-cases/delete-customer.use-case';
import { GetCustomerByIdUseCase } from '../../../../domain/customer/use-cases/get-customer-by-id.use-case';
import { Customer } from '../../../../domain/customer/entity/customer';
import { GetCustomerUseCase } from '../../../../domain/customer/use-cases/get-customer.use-case';
import { GetCustomerByCPFUseCase } from '../../../../domain/customer/use-cases/get-customer-by-cpf.use-case';
export const routes = express.Router();

const createCustomerUserCase = new CreateCustomerUseCase()
const updateCustomerUserCase = new UpdateCustomerUseCase()
const deleteCustomerUserCase = new DeleteCustomerUseCase()
const getCustomerByCPFUseCase = new GetCustomerByCPFUseCase()
const getCustomerByIdUseCase = new GetCustomerByIdUseCase()
const getCustomerUseCase = new GetCustomerUseCase()
const customerRepository = new CustomerRepository()
//Get
//GetById
//GetByCPF (CGC)
//PostCreate
//PutUpdate
//Delete
routes.get('/', (request, response, next)=>{
    return response.status(200).json(getCustomerUseCase.handler(customerRepository))
})

routes.get('/:id', async (request, response, next)=>{
    const id: string = request.params.id
    const customer: Customer = await getCustomerByIdUseCase.handler(customerRepository, id)
    return response.status(200).json(customer)
})

routes.get('/:cpf/cpf', async (request, response, next)=>{
    const cpf: string = request.params.cpf
    const arrCustomer: Array<Customer> = await getCustomerByCPFUseCase.handler(customerRepository, cpf)
    return response.status(200).json(arrCustomer)
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

export const customerRoutes = routes