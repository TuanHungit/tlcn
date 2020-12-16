const fs = require('fs');
const mime = require('mime');
import multer from 'multer';

import { Profile } from '../models/profile';
import {
  createOne,
  updateOne,
  getAll,
  getOne,
} from '../services/handlerFactory';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from './../errors/bad-request-error';

interface IResponse {
  type?: any;
  data?: any;
}

export const getOneProfile = getOne(Profile);

export const createOneProfile = createOne(Profile);

export const getAllProfile = getAll(Profile);

export const getMe = (req: Request, res: Response, next: NextFunction) => {
  req.params.id = req.user.id;
  next();
};

export const uploadBase64Image = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  // to declare some path to store your converted image
  if (req.body.photo) {
    let matches = req.body.photo.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response: IResponse = {};

    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
    let decodedImg = response;
    let imageBuffer = decodedImg.data;
    let type = decodedImg.type;
    let extension = mime.extension(type);
    let fileName = 'users-' + Date.now() + '.' + extension;
    try {
      fs.writeFileSync('uploads/users/' + fileName, imageBuffer, 'utf8');
      req.body.photo = req.headers.host + '/uploads/users/' + fileName;
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
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
