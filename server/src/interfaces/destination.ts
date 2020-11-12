import mongoose from 'mongoose';
export interface ICountryDoc extends mongoose.Document {
  country: string;
  description: string;
}
export interface IDestinationAttr {
  name: string;
  summary: string;
  images: [string];
  destination: [ICountryDoc];
}
export interface IDestinationDoc extends mongoose.Document {
  name: string;
  summary: string;
  images: [string];
  destination: [ICountryDoc];
}
export interface IDestinationModel extends mongoose.Model<IDestinationDoc> {
  build(attr: IDestinationAttr): IDestinationDoc;
}
