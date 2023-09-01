import { Router } from 'express';
import { PaymentRepository } from '../repository/payment.repository';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';
import { ReadOrderPaymentStatusCommand } from '../../../../application/payment/commands/read-order-paymen-status.command';
import { ReadOrderPaymentStatusUseCase } from '../../../../domain/payment/use-cases/read-order-payment-status.use-case';
import { UpdatePaymentStatusCommand } from '../../../../application/payment/commands/update-payment-status.command';
import { UpdatePaymentStatusUseCase } from '../../../../domain/payment/use-cases/update-payment-status.use-case';
import { OrderRepository } from '../../order/repository/order.repository';

export const routes = Router();

const repository = new PaymentRepository();
const orderRepository = new OrderRepository();

const updatePaymentStatusUseCase = new UpdatePaymentStatusUseCase(repository);
const readOrderPaymentStatusUseCase = new ReadOrderPaymentStatusUseCase(repository);

routes.get('/order/:id', async (request, response, next) => {
  const command: ReadOrderPaymentStatusCommand = { orderId: request.params.id };
  const promise = readOrderPaymentStatusUseCase.handler(command);
  return handleExpressControllerError(promise, response);
});

routes.post('/webhook/mercadopago', async (request, response, next) => {
  const command: UpdatePaymentStatusCommand = {
    externalPaymentId: request.body.data.id
  };
  const promise = updatePaymentStatusUseCase.handler(command, orderRepository);
  return handleExpressControllerError(promise, response);
});

export const paymentRoutes = routes;

