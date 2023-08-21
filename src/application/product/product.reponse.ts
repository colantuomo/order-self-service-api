import { Product } from '../../domain/product/entity/product';

export class ProductResponse {

    public static format(data: Product) {
        const { id, name, price, category, description } = data;
        return new Product(id, name, price, category, description);
    }

    public static formatList(data: Product[]) {
        return data.map(
            ({ id, name, price, category, description }) =>
                new Product(id, name, price, category, description)
        );
    }
}
