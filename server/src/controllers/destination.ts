import { Destination } from '../models/destination';
import {
  createOne,
  updateOne,
  deleteOne,
  getAll,
  getOne,
} from '../services/handlerFactory';
import { BadRequestError } from '@thticket/common';
export const createOneDestination = createOne(Destination);
export const getOneDestination = getOne(Destination);
export const updateOneDestination = updateOne(Destination);
export const deleteOneDestination = deleteOne(Destination);
export const getAllDestination = getAll(Destination);
