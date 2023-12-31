import { IValueObject } from "../base/interfaces/IValueObject";

export class Cpf implements IValueObject<string> {
	private _value: string;

	constructor(value: string) {
		this._value = value;
	}
	
	isInvalid(...args: any): boolean {
		return !this.isValid(this._value)
	}
	
	public get value(): string {
		return this._value;
	}
	
	verifierDigit(digits: string): number{
		const numbers: Array<number> = digits
			.split('')
			.map(number => {
				return parseInt(number, 10)
			})

		const modulus: number = numbers.length + 1
		const multiplied: Array<number> = numbers.map((number, index) => number * (modulus - index))
		const mod: number = multiplied.reduce((buffer, number) => buffer + number) % 11

		return (mod < 2 ? 0 : 11 - mod)
	}

	strip(number: string, strict?: boolean): string {
		const STRICT_STRIP_REGEX: RegExp = /[.-]/g
		const LOOSE_STRIP_REGEX: RegExp = /[^\d]/g

		const regex: RegExp = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX
		return (number || '').replace(regex, '')
	}

	format(number: string): string{
		return this.strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
	}

	isValid(number: string = this._value, strict?: boolean): boolean{
		// Blacklist common values.
		const BLACKLIST: Array<string> = [
			'11111111111',
			'22222222222',
			'33333333333',
			'44444444444',
			'55555555555',
			'66666666666',
			'77777777777',
			'88888888888',
			'99999999999',
			'12345678909'
		]
		const stripped: string = this.strip(number, strict)

		// CPF must be defined
		if (!stripped) {
			return false
		}

		// CPF must have 11 chars
		if (stripped.length !== 11) {
			return false
		}

		// CPF can't be blacklisted
		if (BLACKLIST.includes(stripped)) {
			return false
		}

		let numbers: string = stripped.substr(0, 9)
		numbers += this.verifierDigit(numbers)
		numbers += this.verifierDigit(numbers)

		return numbers.substr(-2) === stripped.substr(-2)
	}
}
