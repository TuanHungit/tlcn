import React, { useMemo } from 'react';

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
  ReferenceArrayInput,
  SelectArrayInput,
} from 'admin-on-rest';
import RichTextInput from 'aor-rich-text-input';
import Button from '@material-ui/core/Button';

const backlinksDefaultValue = [new Date()];
const TourCreate = ({ permissions, ...props }) => {
  const initialValues = useMemo(
    () => ({
      average_note: 0,
    }),
    []
  );
  return (
    <Create {...props}>
      <SimpleForm
        //toolbar={<PostCreateToolbar />}
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          ['name', 'price', 'summary'].forEach((field) => {
            if (!values[field]) {
              errors[field] = 'Required field';
            }
          });

          if (values.price < 0) {
            errors.price = 'Should be grather 0';
          }

          return errors;
        }}
      >
        <TextInput label='Tour Name' autoFocus source='name' />
        <TextInput
          Label='Price'
          source='price'
          fullWidth={true}
          multiline={true}
        />
        <ReferenceArrayInput
          source='availableDate'
          defaultValue={backlinksDefaultValue}
        >
          <SimpleFormIterator>
            <DateInput source='date' />
          </SimpleFormIterator>
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

export { TourCreate };
