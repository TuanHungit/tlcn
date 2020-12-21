const fs = require('fs');
const mime = require('mime');
import { Types } from 'mongoose';
import { Tour } from '../models/tour';

import { Destination } from '../models/destination';
import { Request, Response, NextFunction } from 'express';

import { BadRequestError } from './../errors/bad-request-error';
import {
  createOne,
  getAll,
  deleteOne,
  updateOne,
  getOne,
} from '../services/handlerFactory';
import { APIFeatures } from '../services/apiFeatures';
export const getAllTour = getAll(Tour);
export const createOneTour = createOne(Tour);
export const deleteOneTour = deleteOne(Tour);
export const updateOneTour = updateOne(Tour);
export const getOneTour = getOne(Tour);

export const getTourByDestination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let destinationId = req.params.destId;

  let doc = null;
  if (!Types.ObjectId.isValid(destinationId)) {
    doc = await Destination.findOne({ slug: destinationId });
  } else {
    doc = await Destination.findById(destinationId);
  }
  if (!doc) {
    throw new BadRequestError('Destination document not found with that ID!');
  }

  const features = new APIFeatures(
    Tour.find({ destination: doc._id }),
    req.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tours = await features.query;

  res.status(200).send(tours);
};

export const getTourStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      $sort: { avgPrice: 1 },
    },
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
};

export const getMonthlyPlan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const year = (req.params.year as any) * 1; // 2021

  const plan = await Tour.aggregate([
    {
      $unwind: '$startDates',
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' },
      },
    },
    {
      $addFields: { month: '$_id' },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: { numTourStarts: -1 },
    },
    {
      $limit: 12,
    },
  ]);

  res.status(200).json(plan);
};

// /tours-within/:distance/center/:latlng/unit/:unit
// /tours-within/233/center/34.111745,-118.113491/unit/mi
exports.getToursWithin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const radius =
    unit === 'mi' ? (distance as any) / 3963.2 : (distance as any) / 6378.1;

  if (!lat || !lng) {
    next(
      new BadRequestError(
        'Please provide latitutr and longitude in the format lat,lng.'
      )
    );
  }

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json(tours);
};

exports.getDistances = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    next(
      new BadRequestError(
        'Please provide latitutr and longitude in the format lat,lng.'
      )
    );
  }

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [(lng as any) * 1, (lat as any) * 1],
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);

  res.status(200).json(distances);
};

export const setDestinationId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.destination = req.params.destId;
  next();
};

export const getTourForView = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const tour = await Tour.findById(req.params.id).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    throw new BadRequestError('There is no tour with that id.');
  }

  res.status(200).send(tour);
};

// export const getTourWithSlug = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // 1) Get the data, for the requested tour (including reviews and guides)
//   const tour = await Tour.findOne({ slug: req.params.slug }).populate({
//     path: 'reviews',
//     fields: 'review rating user',
//   });

//   if (!tour) {
//     throw new BadRequestError('There is no tour with that slug.');
//   }

//   res.status(200).send(tour);
// };

interface IResponse {
  type?: any;
  data?: any;
}
export const uploadBase64Image = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  // to declare some path to store your converted image
  if (req.body.images) {
    console.log(req.body.images.length);
    req.body.images.forEach((el: any, key: any) => {
      let matches = el.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
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
      let fileName = 'tours-' + Date.now() + '.' + extension;
      try {
        fs.writeFileSync('uploads/tours/' + fileName, imageBuffer, 'utf8');
        req.body.images[key] = req.headers.host + '/uploads/tours/' + fileName;
      } catch (e) {
        console.log(e);
        next(e);
      }
    });
  }
  next();
};
