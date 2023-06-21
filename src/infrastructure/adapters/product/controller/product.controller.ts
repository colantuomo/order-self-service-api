import express, { response } from 'express';
import { ProductRepository } from '../repository/product.repository';
export const routes = express.Router();

const productRepository = new ProductRepository()
//Get
//GetByOrderId
//PutUpdate

routes.get('/', (request, response, next)=>{
    return response.status(200).json(productRepository.get())
})

routes.get('/:id', (request, response, next)=>{
    return response.status(200).json(productRepository.getById(request.params.id))
})

routes.post('/', (request, response, next)=>{

})