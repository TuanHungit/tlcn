import React from 'react';
import {
  Show,
  ShowButton,
  SimpleShowLayout,
  RichTextField,
  DateField,
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Filter,
} from 'admin-on-rest';

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
