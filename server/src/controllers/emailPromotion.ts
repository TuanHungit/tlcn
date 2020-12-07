import { EmailPromotion } from '../models/emailPromotion';
import { Request, Response, NextFunction } from 'express';
import { createOne, getAll, updateOne } from '../services/handlerFactory';
export const getAllEmailPromotion = getAll(EmailPromotion);
export const createOneEmailPromotion = createOne(EmailPromotion);
export const updateOneEmailPromotion = updateOne(EmailPromotion);
