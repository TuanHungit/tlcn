import { EmailPromotion } from '../models/emailPromotion';
import { Request, Response, NextFunction } from 'express';
import { createOne, getAll, updateOne } from '../services/handlerFactory';
import { BadRequestError } from '../errors';
export const getAllEmailPromotion = getAll(EmailPromotion);
// export const createOneEmailPromotion = createOne(EmailPromotion);
export const updateOneEmailPromotion = updateOne(EmailPromotion);

export const createOneEmailPromotion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const existingEmail = await EmailPromotion.findOne({ email: email });
  if (existingEmail) {
    throw new BadRequestError('Email đã được đăng ký!');
  }

  const doc = await EmailPromotion.create(req.body);
  res.status(201).json(doc);
};

export const getEmailArray = async () => {
  const emailJSON = await EmailPromotion.find({ status: true });
  const emailList: Array<String> = [];
  emailJSON.forEach((el: any) => emailList.push(el.email));
  return emailList;
};
