import * as React from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  CheckboxProps,
} from '@mui/material';
import { ControlledInputProps } from 'types';

type Props = ControlledInputProps<boolean> &
  Omit<CheckboxProps, 'value' | 'onChange'> & {
    label: string;
  };

const Checkbox: React.FC<Props> = ({
  value,
  onChange,
  label,
  title,
  ...rest
}) => {
  return (
    <FormControlLabel
      title={title}
      control={
        <MuiCheckbox
          {...rest}
          title={title}
          checked={value}
          onChange={(_, checked) => {
            onChange(checked);
          }}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
