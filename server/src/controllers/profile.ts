import { Profile } from '../models/profile';
import {
  createOne,
  updateOne,
  getAll,
  getOne,
} from '../services/handlerFactory';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from './../errors/bad-request-error';
import multer from 'multer';
import sharp from 'sharp';

exports.getMe = (req: Request, res: Response, next: NextFunction) => {
  req.params.id = req.user.id;
  next();
};
export const getOneProfile = getOne(Profile);
export const createOneProfile = createOne(Profile);
export const getAllProfile = getAll(Profile);
const multerStorage = multer.memoryStorage();

const multerFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new BadRequestError('Not an image! Please upload only images.'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadPhoto = upload.single('photo');

export const resizeUserPhoto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`uploads/users/${req.file.filename}`);

  next();
};

export const setUserId = (req: Request, res: Response, next: NextFunction) => {
  req.body.user = req.user.id;
  req.params.userId = req.user.id;
  next();
};

export const updateOneProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const doc = await Profile.findOneAndUpdate(
    { user: req.params.userId as any },
    req.body,
    { new: true, runValidators: true }
  );
  if (!doc) {
    throw new BadRequestError('Profile not found with user!');
  }

  res.status(200).json(doc);
};
