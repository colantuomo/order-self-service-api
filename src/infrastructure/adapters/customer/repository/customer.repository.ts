import { Customer } from "../../../../domain/customer/entity/customer";

export class CustomerRepository {
    private lsCustomer: Array<Customer> = []

    new(newCustomer: Customer){
        return this.lsCustomer.push(newCustomer);
    }

    update(updatedCustomer: Customer){
        return updatedCustomer;
    }

    get(){
        return this.lsCustomer;
    }

    getById(id: string){
        return this.lsCustomer.filter( x=> x.id === id)[0];
    }

    getByCPF(cpf: string){
        return this.lsCustomer.filter( x=> x.cgc === cpf);
    }

    /**
     * 
     * @param customer 
     */
    delete(customer: Customer){
        const indCustomer = this.lsCustomer.findIndex((x: Customer)=> x.id === customer.id)
        this.lsCustomer.splice(indCustomer, 1)
    }
}
