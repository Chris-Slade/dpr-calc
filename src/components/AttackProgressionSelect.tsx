import * as React from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from '@mui/material';
import Value from 'types/AttackProgression';
import ControlledInputProps from 'types/ControlledInputProps';

interface Props extends ControlledInputProps<Value> {}

const AttackProgressionSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Attack Progression</FormLabel>
      <Select
        labelId="attack-progression"
        value={value}
        displayEmpty
        onChange={e => {
          onChange(e.target.value as Value);
        }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="Generic Martial">
          Generic Martial (Paladin/Ranger/Barbarian)
        </MenuItem>
        <MenuItem value="Fighter">Fighter</MenuItem>
        <MenuItem value="Cantrip">Cantrip (Eldritch Blast)</MenuItem>
      </Select>
      <FormHelperText>
        When using an attack progression, your proficiency bonus will be
        automatically included in your to-hit mods, and your DPR will be shown
        for each level you gain a new attack.
      </FormHelperText>
    </FormControl>
  );
};

export default AttackProgressionSelect;
