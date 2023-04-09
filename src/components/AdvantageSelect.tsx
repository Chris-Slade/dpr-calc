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

interface Props extends ControlledInputProps<Value> {
  label: string;
}

const AdvantageSelect: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
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
          <FormControlLabel
            value="super_advantage"
            control={<Radio />}
            label="Super Advantage"
            title="The highest of 3d20, e.g. for Elven Accuracy."
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default AdvantageSelect;
