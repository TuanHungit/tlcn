export abstract class CustomError extends Error {
  constructor(public message: string) {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract statusCode: number;
  abstract serializerErrors(): {
    message: string;
    feild?: string;
  }[];
}
