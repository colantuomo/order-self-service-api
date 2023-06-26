import express from 'express';
import { orderRoutes } from './order/controller/order.controller';
import { customerRoutes } from './customer/controller/customer.controller';

const routes = express.Router();
routes.use('/customers', customerRoutes)
routes.use('/orders', orderRoutes);
export { routes };