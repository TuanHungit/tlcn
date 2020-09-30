import { Response, Request, NextFunction } from 'express';

import { CustomError } from '../errors/custom-error';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .send({ errors: error.serializerErrors() });
  }
  console.error(error);
  res.status(400).send({ errors: [`Application Error: ${error.message}`] });
};

export { errorHandler };
