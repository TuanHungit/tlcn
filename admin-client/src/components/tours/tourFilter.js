import * as React from 'react';
import { ReferenceInput, SelectInput, TextInput, Filter } from 'react-admin';
export const TourFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='Tour' source='id' reference='tours' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);
