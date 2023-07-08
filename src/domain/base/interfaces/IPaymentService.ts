export interface IPaymentService<T, R = any> {
	submit( payload: R ): T;
	check( id: string ): T; 
}