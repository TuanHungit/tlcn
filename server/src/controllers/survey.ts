import { Survey } from '../models/survey';
import {
  getOne,
  getAll,
  createOne,
  deleteOne,
} from '../services/handlerFactory';

export const getAllSurvey = getAll(Survey);
export const getOneSurvey = getOne(Survey);
export const createOneSurvey = createOne(Survey);
export const deleteOneSurvey = deleteOne(Survey);
