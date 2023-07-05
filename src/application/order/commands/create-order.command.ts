import { ICommand } from '../../../domain/base/interfaces';

export interface CreateOrderCommand extends ICommand {
    customerId?: string;
    products: Array<{
        id: string;
        price: number;
        quantity: number;
    }>;
}
