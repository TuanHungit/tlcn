import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const TourList = (props) => (
  <List title='All tours' {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='duration' />
      <TextField source='summary' />
    </Datagrid>
  </List>
);
