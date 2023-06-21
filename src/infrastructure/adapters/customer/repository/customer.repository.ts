import { Customer } from "../../../domain/customer/entity/customer";

export class CustomerRepository {
    private lsCustomer: Array<Customer> = []
    async save(newCustomer: Customer){
        this.lsCustomer.push(newCustomer);
    }
}
