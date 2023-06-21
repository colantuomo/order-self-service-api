import express from 'express';
import helmet from 'helmet';
import { routes } from './adapters/index.routes';


const app = express();
app.use(helmet());
app.use(express.json());
app.get('/health', (req, res, next) => {
  res.status(200).json({
    status: 'API Up and running',
  });
  next();
});
app.use('/api', routes);

export { app };
