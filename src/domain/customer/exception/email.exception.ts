import { Exception } from "../../base/Exception";

export class EmailError extends Exception {
	constructor() {
		super('Email not valid!', 404);
	}
}