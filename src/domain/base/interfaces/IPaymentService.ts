export interface IPaymentService<T = any> {
	create(...props: any): Promise<T>;
	read(id: string): Promise<T>
}
