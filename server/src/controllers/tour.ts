import { Tour } from '../models/tour';
import {
  createOne,
  getAll,
  deleteOne,
  updateOne,
} from '../services/handlerFactory';
export const getAllTour = getAll(Tour);
export const createOneTour = createOne(Tour);
export const deleteOneTour = deleteOne(Tour);
export const updateOneTour = updateOne(Tour);
