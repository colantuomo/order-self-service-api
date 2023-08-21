import { Router } from 'express';
import { PaymentRepository } from '../repository/payment.repository';
import { UpdatePaymentCommand } from '../../../../application/payment/commands/update-payment.command';
import { UpdatePaymentUseCase } from '../../../../domain/payment/use-cases/update-payment.use-case';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';

export const routes = Router();

const repository = new PaymentRepository();
const updatePaymentUseCase = new UpdatePaymentUseCase(repository);

routes.put('/:id/checkout', async (request, response, next) => {
  const command: UpdatePaymentCommand = { idPayment: request.params.id, status: request.body.status }
  const promise = updatePaymentUseCase.handler(command);
  return handleExpressControllerError(promise, response);
});


export const paymentRoutes = routes;

