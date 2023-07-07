import { ICommand } from '../../../domain/base/interfaces/ICommand';

export interface ReadProductsCommand extends ICommand {
    ids?: string[];
}
