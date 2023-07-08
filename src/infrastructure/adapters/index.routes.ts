import express from 'express';
import { orderRoutes } from './order/controller/order.controller';
import { customerRoutes } from './customer/controller/customer.controller';
import { productRoutes } from './product/controller/product.controller';
import { paymentRoutes } from './payment/controller/payment.controller';

const routes = express.Router();
routes.use('/customers', customerRoutes);
routes.use('/orders', orderRoutes);
routes.use('/products', productRoutes);
routes.use('/payments', paymentRoutes);

export { routes };
