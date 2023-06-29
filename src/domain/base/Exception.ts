export abstract class Exception {
  public statusCode: number;
  public message: string;

  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }

  public get error() {
    return {
      message: this.message,
      statusCode: this.statusCode,
    }
  }
}