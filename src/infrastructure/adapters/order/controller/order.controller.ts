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
import { UpdateStatusOrderUseCase } from '../../../../domain/order/use-cases/update-status-order.use-case';
import { UpdateOrderStatusCommand } from '../../../../application/order/commands/update-order-status.command';
import { ReadOrderPaymentInfoUseCase } from '../../../../domain/order-payment/use-cases/read-order-payment-info.use-case';

export const routes = express.Router();

const mercadoPagoService = new MercadoPagoService();

const orderRepository = new OrderRepository();
const productsRepository = new ProductRepository();
const paymentRepository = new PaymentRepository();

const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const getOrdersUseCase = new GetOrdersUseCase(orderRepository);
const createTransactionUseCase = new CreateTransactionUseCase(paymentRepository, mercadoPagoService);
const updateStatusOrderUseCase = new UpdateStatusOrderUseCase(orderRepository);
const readOrderPaymentInfoUseCase = new ReadOrderPaymentInfoUseCase(undefined, mercadoPagoService);


routes.get('/', (request, response, next) => {
    const command: GetOrdersCommand = {};
    const promise = getOrdersUseCase.handler(command);
    return handleExpressControllerError(promise, response);
});

routes.post('/', async (request, response, next) => {
    const command: CreateOrderCommand = request.body;
    const order = await createOrderUseCase.handler(command, productsRepository);
    const createTransactionCommand: CreateTransactionCommand = {
        orderId: order.id,
        paymentId: order?.payment?.id!,
        transactionAmount: order?.totalValue,
        description: request.body.description,
        installments: request.body.installments,
        payer: {
            email: request.body.payer.email,
        },
        paymentMethodId: request.body.paymentMethodId
    };
    const payment = await createTransactionUseCase.handler(createTransactionCommand);
    const promise = readOrderPaymentInfoUseCase.handler({ orderId: order.id, paymentId: payment.id, externalPaymentId: payment.externalPaymentId });
    return handleExpressControllerError(promise, response);
});

routes.put('/:id/status', (request, response, next) => {
    const command: UpdateOrderStatusCommand = {
        id: request.params.id,
        status: request.body.status
    }
    const promise = updateStatusOrderUseCase.handler(command);
    return handleExpressControllerError(promise, response);
});

export const orderRoutes = routes;
