import express from 'express';
import { CreateOrderCommand } from '../../../../application/order/commands/create-order.command';
import { OrderRepository } from '../repository/order.repository';
import { CreateOrderUseCase } from '../../../../domain/order/use-cases/create-order.use-case';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';
import { GetOrdersCommand } from '../../../../application/order/commands/get-orders.command';
import { GetOrdersUseCase } from '../../../../domain/order/use-cases/get-orders.use-case';
import { ProductRepository } from '../../product/repository/product.repository';
import { PaymentRepository } from '../../payment/repository/payment.repository';
import { CreateTransactionUseCase } from '../../../../domain/payment/use-cases/create-transaction.use-case';
import { MercadoPagoService } from '../../../services/mercado-pago.service';
import { CreateTransactionCommand } from '../../../../application/payment/commands/create-transaction.command';

export const routes = express.Router();

const mercadoPagoService = new MercadoPagoService();

const orderRepository = new OrderRepository();
const productsRepository = new ProductRepository();
const paymentRepository = new PaymentRepository();

const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const getOrdersUseCase = new GetOrdersUseCase(orderRepository);
const createTransactionUseCase = new CreateTransactionUseCase(paymentRepository, mercadoPagoService);


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

routes.post('/', async (request, response, next) => {
    const command: CreateOrderCommand = request.body;
    const order = await createOrderUseCase.handler(command, productsRepository);
    const createTransactionCommand: CreateTransactionCommand = {
        paymentId: order?.payment?.id!,
        value: order?.totalValue
    };
    const promise = createTransactionUseCase.handler(createTransactionCommand);
    return handleExpressControllerError(promise, response);
});

routes.put('/:idOrder/item/add', (request, response, next) => {
    return response.status(200).json({
        status: 'PUT Orders /',
    });
});

routes.put('/:id/item/update', (request, response, next) => {
    return response.status(200).json({
        status: 'PUT Orders /',
    });
});

routes.put('/:id/payment', (request, response, next) => {
    return response.status(200).json({
        status: 'PUT Orders /',
    });
});


routes.delete('/:id', (request, response, next) => {
    return response.status(200).json({
        status: 'PUT Orders /',
    });
});

export const orderRoutes = routes;
