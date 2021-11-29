import * as React from 'react';
import { OutlinedTextFieldProps, TextField } from '@mui/material';
import { ControlledInputProps } from 'types';
import Value from 'types/NumericInputValue';

type Props = ControlledInputProps<Value> &
  Omit<OutlinedTextFieldProps, 'value' | 'onChange' | 'variant'>;

const parse = (value: string): Value => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};

const NumericInput: React.FC<Props> = ({ value, onChange, ...rest }) => (
  <TextField
    variant="outlined"
    type="number"
    value={value || ''}
    onChange={(e) => onChange(parse(e.target.value))}
    sx={{ maxWidth: '200px' }}
    {...rest}
  />
);

export default NumericInput;
