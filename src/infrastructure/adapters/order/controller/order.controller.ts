import express from 'express';
import { CreateOrderCommand } from '../../../../application/order/commands/create-order.command';
import { GetCustomerByIdUseCase } from '../../../../domain/customer/use-cases/get-customer-by-id.use-case';
import { CustomerRepository } from '../../customer/repository/customer.repository';
import { OrderRepository } from '../repository/order.repository';
import { CreateOrderUseCase } from '../../../../domain/order/use-cases/create-order.use-case';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';
export const routes = express.Router();

//GetById
//GetAllOrder
//GetByCustomerId
//PostCreateWithProduct
//PutUpdate - Insert new item
//PutUpdate - Insert remove
//PutUpdate - Select Payment
//Delete Order
const customerRepository = new CustomerRepository();
const orderRepository = new OrderRepository();
const getCustomerByIdUseCase = new GetCustomerByIdUseCase()
const createOrderUseCase = new CreateOrderUseCase(orderRepository)

routes.get('/', (request, response, next) => {
	return response.status(200).json({
		status: 'GET Orders /',
	});
});

routes.get('/:id', (request, response, next) => {
	return response.status(200).json({
		status: 'GET Orders /:id',
	});
});

routes.get('/:customerId/customer', (request, response, next) => {
	return response.status(200).json({
		status: 'GET Orders /:id',
	});
});

/**
 * @body 
 * 	{
 *		"customer": "",
 *		"item": [
 *			{
 *				"product": "BIGMAC",
 *				"quantity": 1
 *			}
 *		],
 *  	"payment": "PIX" | "DINHEIRO" | "CARTAO"
 *	}
 */
routes.post('/', async (request, response, next) => {
	let customer;
	let command: CreateOrderCommand = request.body;
	
	if (command.customerId !== undefined){
		customer = await getCustomerByIdUseCase.handler(customerRepository, command.customerId)
		command.customer = customer;
	}

	

	const promise = createOrderUseCase.handler(command)
	return handleExpressControllerError(promise, response)
});

/**
 * @body {
 *		"item": [
 *  		{
 * 				"product": "l001",
 * 				"quantity": 1
 * 			}    
 * 		]
 * 	}
 */
routes.put('/:idOrder/item/add', (request, response, next) => {

	return response.status(200).json({
		status: 'PUT Orders /',
	});
});

/**
 * @body {
 *		"item": [
 *  		{
 * 				"product": "",
 * 				"quantity": 0
 * 			}    
 * 		]
 * 	}
 */
routes.put('/:id/item/update', (request, response, next) => {
	return response.status(200).json({
		status: 'PUT Orders /',
	});
});

/**
 * @body 
 *  {
 *		"payment": "PIX" | "BOLETO" | "CARTAO"
 * 	}
 */
routes.put('/:id/payment', (request, response, next) => {
	return response.status(200).json({
		status: 'PUT Orders /',
	});
});

/**
 * 
 */
routes.delete('/:id', (request, response, next) => {
	return response.status(200).json({
		status: 'PUT Orders /',
	});
});

export const orderRoutes = routes;
