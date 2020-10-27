import * as React from 'react';
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
import Button from '@material-ui/core/Button';

const TourShow = (props) => {
  const controllerProps = useShowController(props);
  <ShowView {...controllerProps}>
    <Tab label='tour.form.summary'>
      <TextField source='id' />
      <TextField source='name' />

      <ArrayField source='backlinks'>
        <Datagrid>
          <DateField source='date' />
          <UrlField source='url' />
        </Datagrid>
      </ArrayField>
    </Tab>
  </ShowView>;
};
export { TourShow };
