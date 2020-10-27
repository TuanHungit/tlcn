import React from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  BooleanInput,
  Create,
  DateInput,
  FormDataConsumer,
  NumberInput,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  Toolbar,
  required,
  FileInput,
  FileField,
} from 'react-admin';

import { TourFilter } from './tourFilter';
export const TourList = (props) => (
  <List {...props} filters={<TourFilter />}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='price' />
      <TextField source='priceDiscount' />
      <TextField source='duration' />
      <TextField source='summary' />
      <TextField source='ratingsQuantity' />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
