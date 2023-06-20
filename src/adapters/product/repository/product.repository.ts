import { Product } from "../../../domain/product/product";

export class ProductRepository {
    private lsProduct: Array<Product> = []
    get(): Array<Product>{
        return this.lsProduct
    }

    getById(id: string){
        return this.lsProduct.filter(x=> x.id === id)
    }

    
}
