import express from 'express';
import helmet from 'helmet';
import { routes } from '../adapters/index.routes';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
app.use(helmet());
app.use(express.json());
app.get('/health', async (req, res, next) => {
  try {
    await prisma.users.create({ data: { name: 'Denis', cpf: '12321351' } });
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({
    status: 'API Up and running',
  });
});
app.use('/api', routes);

export { app };
