import { Promotion } from '../models/promotion';
import { Request, Response, NextFunction } from 'express';
import {
  createOne,
  getAll,
  updateOne,
  deleteOne,
} from '../services/handlerFactory';
import { BadRequestError } from '../errors';
export const getAllPromotion = getAll(Promotion);
export const createOnePromotion = createOne(Promotion);
export const updateOnePromotion = updateOne(Promotion);
export const deleteOnePromotion = deleteOne(Promotion);

export const checkCodeValids = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { code } = req.body;
  const promotion: any = await Promotion.findOne({ code: code });
  if (!promotion) {
    throw new BadRequestError('Mã khuyến mãi không hợp lệ!');
  }
  res.status(200).send({ discount: promotion.discount });
};
