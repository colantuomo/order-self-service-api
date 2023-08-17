import express from 'express';
import { CreateCustomerUseCase } from '../../../../domain/customer/use-cases/create-customer.use-case';
import { CreateCustomerCommand } from '../../../../application/customer/commands/create-customer.command';
import { UpdateCustomerCommand } from '../../../../application/customer/commands/update-customer.command';
import { CustomerRepository } from '../repository/customer.repository';
import { UpdateCustomerUseCase } from '../../../../domain/customer/use-cases/update-customer.use-case';
import { DeleteCustomerUseCase } from '../../../../domain/customer/use-cases/delete-customer.use-case';
import { GetCustomerByIdUseCase } from '../../../../domain/customer/use-cases/get-customer-by-id.use-case';
import { GetCustomerUseCase } from '../../../../domain/customer/use-cases/get-customer.use-case';
import { GetCustomerByCPFUseCase } from '../../../../domain/customer/use-cases/get-customer-by-cpf.use-case';
import { ReadCustomerByIdCommand } from '../../../../application/customer/commands/read-customer-by-id.command';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';
import { ReadCustomerByCPFCommand } from '../../../../application/customer/commands/read-customer-by-cpf.command';
import { DeleteCustomerCommand } from '../../../../application/customer/commands/delete-customer.command';

export const routes = express.Router();

const customerRepository = new CustomerRepository()
const createCustomerUserCase = new CreateCustomerUseCase(customerRepository)
const updateCustomerUserCase = new UpdateCustomerUseCase(customerRepository)
const deleteCustomerUserCase = new DeleteCustomerUseCase(customerRepository)
const getCustomerByCPFUseCase = new GetCustomerByCPFUseCase(customerRepository)
const getCustomerByIdUseCase = new GetCustomerByIdUseCase(customerRepository)
const getCustomerUseCase = new GetCustomerUseCase(customerRepository)

routes.get('/', async (request, response, next) => {
    return handleExpressControllerError(getCustomerUseCase.handler(customerRepository), response);
})

routes.get('/:id', async (request, response, next) => {
    const command: ReadCustomerByIdCommand = { id: request.params.id }
    const customer = getCustomerByIdUseCase.handler(command)
    return handleExpressControllerError(customer, response);
})

routes.get('/:cpf/cpf', async (request, response, next) => {
    const command: ReadCustomerByCPFCommand = { cpf: request.params.cpf }
    const customer = getCustomerByCPFUseCase.handler(command)
    return handleExpressControllerError(customer, response);
})

routes.post('/', (request, response, next) => {
    const command: CreateCustomerCommand = request.body;
    const createCustomer = createCustomerUserCase.handler(command)
    return handleExpressControllerError(createCustomer, response);
})

routes.put('/:id', (request, response, next) => {
    const command: UpdateCustomerCommand = { id: request.params.id, customer: request.body };
    const id: string = request.params.id
    const updatedCustomer = updateCustomerUserCase.handler(command)
    return handleExpressControllerError(updatedCustomer, response);
})

routes.delete('/:id', (request, response, next) => {
    const command: DeleteCustomerCommand = { id: request.params.id }
    const promise = deleteCustomerUserCase.handler(command)
    return handleExpressControllerError(promise, response);
})

export const customerRoutes = routes
