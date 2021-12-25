import * as React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import Value from 'types/Advantage';
import { ControlledInputProps } from 'types';

interface Props extends ControlledInputProps<Value> {}

const AdvantageSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Advantage/Disadvantage</FormLabel>
        <RadioGroup
          aria-label="Advantage/Disadvantage"
          defaultValue="normal"
          name="radio-buttons-group"
          row
          value={value}
          onChange={(e) => onChange(e.target.value as Value)}
        >
          <FormControlLabel value="normal" control={<Radio />} label="Normal" />
          <FormControlLabel
            value="advantage"
            control={<Radio />}
            label="Advantage"
          />
          <FormControlLabel
            value="disadvantage"
            control={<Radio />}
            label="Disadvantage"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default AdvantageSelect;
