export interface IValueObject<T> {
    value: T
    isInvalid(...args: any): boolean;
}