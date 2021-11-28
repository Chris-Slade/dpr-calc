import * as React from 'react';
import { FormGroup, FormLabel } from '@mui/material';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { ControlledInputProps } from 'types';

type Value = boolean;

type Props = ControlledInputProps<Value> &
  Omit<CheckboxProps, 'value' | 'onChange'>;

const BaAttackCheckbox: React.FC<Props> = ({ value, onChange, ...rest }) => (
  <FormGroup>
    <FormLabel>Has BA Attack?</FormLabel>
    <Checkbox
      value={value}
      onChange={(_, checked) => {
        onChange(checked);
      }}
      {...rest}
    />
  </FormGroup>
);

export default BaAttackCheckbox;
