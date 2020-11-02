import { CustomError } from '../errors/custom-error';

export class BadRequestError extends CustomError {
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  statusCode = 400;
  serializerErrors() {
    return [{ message: this.message }];
  }
}
