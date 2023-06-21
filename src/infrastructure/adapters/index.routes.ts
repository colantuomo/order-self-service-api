import express from 'express';
import { orderRoutes } from './order/controller/order.controller';

const routes = express.Router();
routes.use('/orders', orderRoutes);
export { routes };
