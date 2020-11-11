import mongoose from 'mongoose';
export interface ICountryDoc extends mongoose.Document {
  country: String;
  description: String;
}
export interface IDestinationAttr {
  name: String;
  summary: String;
  images: [String];
  destination: [ICountryDoc];
}
export interface IDestinationDoc extends mongoose.Document {
  name: String;
  summary: String;
  images: [String];
  destination: [ICountryDoc];
}
export interface IDestinationModel extends mongoose.Model<IDestinationDoc> {
  build(attr: IDestinationAttr): IDestinationDoc;
}
