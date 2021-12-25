import * as React from 'react';
import { OutlinedTextFieldProps, TextField } from '@mui/material';
import { ControlledInputProps } from 'types';
import Value from 'types/NumericInputValue';
import { styled } from '@mui/material/styles';

type Props = ControlledInputProps<Value> &
  Omit<OutlinedTextFieldProps, 'value' | 'onChange' | 'variant'>;

const parse = (value: string): Value => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};

const StyledField = styled(TextField)({
  minWidth: '8ch',
  maxWidth: '30ch',
});

const NumericInput: React.FC<Props> = ({ value, onChange, ...rest }) => (
  <StyledField
    variant="outlined"
    type="number"
    value={value || ''}
    onChange={(e) => onChange(parse(e.target.value))}
    {...rest}
  />
);

export default NumericInput;
