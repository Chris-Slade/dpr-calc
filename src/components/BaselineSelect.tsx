import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { ControlledInputProps } from 'types';
import Value from 'types/Baseline';

interface Props extends ControlledInputProps<Value> {}

const BaselineSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Baseline Type</FormLabel>
        <RadioGroup
          aria-label="Baseline Type"
          defaultValue="warlock"
          name="radio-buttons-group"
          row
          value={value}
          onChange={e => onChange(e.target.value as Value)}
        >
          <FormControlLabel
            value="warlock"
            control={<Radio />}
            label="Warlock"
          />
          <FormControlLabel
            value="fighter"
            control={<Radio />}
            label="Fighter"
          />
          <FormControlLabel value="rogue" control={<Radio />} label="Rogue" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default BaselineSelect;
