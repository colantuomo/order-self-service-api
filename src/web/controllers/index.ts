import express from 'express';
import { orderRoutes } from './order';

const routes = express.Router();
routes.use('/orders', orderRoutes);
export { routes };
