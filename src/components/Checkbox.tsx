import * as React from 'react';
import {
  Checkbox as MuiCheckbox,
  FormGroup,
  FormControlLabel,
  CheckboxProps,
} from '@mui/material';
import { ControlledInputProps } from 'types';

type Props = ControlledInputProps<boolean> &
  Omit<CheckboxProps, 'value' | 'onChange'> & {
    label: string;
  };

const Checkbox: React.FC<Props> = ({ value, onChange, label, ...rest }) => {
  return (
    <FormGroup
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <FormControlLabel
        control={
          <MuiCheckbox
            {...rest}
            checked={value}
            onChange={(_, checked) => {
              onChange(checked);
            }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
