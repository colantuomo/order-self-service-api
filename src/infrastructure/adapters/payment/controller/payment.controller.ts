import { Router } from 'express';
import { PaymentRepository } from '../repository/payment.repository';
import { handleExpressControllerError } from '../../../../application/ports/out/handle-controller-error';

export const routes = Router();
//GetTransaction
//PutUpdate 

const repository = new PaymentRepository();

routes.get('/', async (request, response, next) => {

});


export const paymentRoutes = routes;

