import { Request, Response, NextFunction } from 'express';

import { BadRequestError } from './../errors/bad-request-error';

export const getMe = async (req: Request, res: any) => {
  res.status(200).send(res.data);
};
