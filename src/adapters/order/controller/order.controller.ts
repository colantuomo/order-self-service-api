import express from 'express';
export const routes = express.Router();

//GetAllOrder
//GetById
//GetByCustomerId
//PostCreateWithProduct
//PutUpdate - Insert new item
//PutUpdate - Insert remove
//Delete Order

routes.get('/', (req, res, next) => {
  return res.status(200).json({
    status: 'GET Orders /',
  });
});

routes.get('/:id', (req, res, next) => {
  return res.status(200).json({
    status: 'GET Orders /:id',
  });
});

routes.post('/', (req, res, next) => {
  return res.status(200).json({
    status: 'POST Orders /',
  });
});

export const orderRoutes = routes;
