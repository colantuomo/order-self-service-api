import express from 'express';
import { CreateOrderCommand } from '../../../../application/order/commands/create-order.command';
import { OrderRepository } from '../repository/order.repository';
import { CreateOrderUseCase } from '../../../../domain/order/use-cases/create-order.use-case';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';
import { GetOrdersCommand } from '../../../../application/order/commands/get-orders.command';
import { GetOrdersUseCase } from '../../../../domain/order/use-cases/get-orders.use-case';
import { ProductRepository } from '../../product/repository/product.repository';
import { PaymentRepository } from '../../payment/repository/payment.repository';
export const routes = express.Router();

const orderRepository = new OrderRepository();
const productsRepository = new ProductRepository();
const paymentRepository = new PaymentRepository();

const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const getOrdersUseCase = new GetOrdersUseCase(orderRepository);


routes.get('/', (request, response, next) => {
    const command: GetOrdersCommand = {};
    const promise = getOrdersUseCase.handler(command);
    return handleExpressControllerError(promise, response);
});

routes.get('/:id', (request, response, next) => {
    return response.status(200).json({
        status: 'GET Orders /:id',
    });
});

routes.get('/customer/:customerId', (request, response, next) => {
    return response.status(200).json({
        status: 'GET customer/:customerId',
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
 *        "value": 15
 *			}
 *		],
 *  	"payment": "PIX" | "DINHEIRO" | "CARTAO"
 *	}
 */
routes.post('/', async (request, response, next) => {
    const command: CreateOrderCommand = request.body;
    const promise = createOrderUseCase.handler(command, productsRepository);
    return handleExpressControllerError(promise, response);
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
