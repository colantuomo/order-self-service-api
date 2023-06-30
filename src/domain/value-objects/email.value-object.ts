import { IValueObject } from "../base/interfaces/IValueObject";

export class Email implements IValueObject<string> {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  public get value(): string {
    return this._value;
  }

  validate(): boolean {
    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!this._value)
      return false;

    if (this._value.length > 254)
      return false;

    const valid = emailRegex.test(this._value);

    if (!valid)
      return false;

    const [address, domain] = this._value.split("@");

    if (address?.length > 64)
      return false;

    const domainParts = domain?.split(".");

    const invalidDomain = domainParts.some((part) => part.length > 63);

    if (invalidDomain)
      return false;

    return true;
  }
}
