import { Promotion } from '../models/promotion';
import { Request, Response, NextFunction } from 'express';

import { Email } from '../services/email';
import {
  createOne,
  getAll,
  updateOne,
  deleteOne,
  getOne,
} from '../services/handlerFactory';
import { BadRequestError } from '../errors';
export const getAllPromotion = getAll(Promotion);

export const updateOnePromotion = updateOne(Promotion);
export const deleteOnePromotion = deleteOne(Promotion);
export const getOnePromotion = getOne(Promotion);

export const createOnePromotion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const doc: any = await Promotion.create(req.body);
  new Email().sendPromotions({
    src: doc.imageCovert,
    title: doc.title,
    discount: doc.discount,
    link: 'http://localhost:3000/promotions',
  });
  res.status(201).send(doc);
};
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
