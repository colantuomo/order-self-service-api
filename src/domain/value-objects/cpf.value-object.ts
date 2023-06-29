import { IValueObject } from "../base/interfaces/IValueObject";

export class Cpf implements IValueObject<string> {
    private _value: string;

    constructor(value: string) {
        this._value = value;
    }

    public get value(): string {
        return this._value;
    }

    validate(): boolean {
        return false;
    }
}
