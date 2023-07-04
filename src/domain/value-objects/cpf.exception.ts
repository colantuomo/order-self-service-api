import { Exception } from "../base/Exception";

export class CPFError extends Exception {
	constructor() {
		super('CPF not valid!', 404);
	}
}