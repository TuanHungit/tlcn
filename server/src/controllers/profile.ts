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
exports.getOneProfile = getOne(Profile);
exports.updateOneProfile = updateOne(Profile);
exports.createOneProfile = createOne(Profile);

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

exports.uploadPhoto = upload.single('photo');

exports.resizeUserPhoto = async (
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
    .toFile(`public/img/users/${req.file.filename}`);

  next();
};
