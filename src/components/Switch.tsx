import React from 'react';
import {
  FormControlLabel,
  Switch as MuiSwitch,
  SwitchProps,
} from '@mui/material';
import { ControlledInputProps } from 'types';

type Props = ControlledInputProps<boolean> &
  Omit<SwitchProps, 'value' | 'onChange'> & {
    label: string;
  };

const Switch: React.FC<Props> = ({ value, onChange, label, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          {...rest}
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

export default Switch;
