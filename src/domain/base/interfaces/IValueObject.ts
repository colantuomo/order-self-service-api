export interface IValueObject<T> {
    value: T
    validate(...args: any): boolean;
}