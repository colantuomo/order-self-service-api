import { ICommand } from '../../../domain/base/interfaces';

export interface CreateOrderCommand extends ICommand {
    customerId?: string;
    products: Array<ICreateOrderProducts>;
}

export interface ICreateOrderProducts{
    id: string;
    price: number;
    quantity: number;
}