import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { ControlledInputProps } from 'types';
import Value from 'types/Baseline';

interface Props extends ControlledInputProps<Value> {}

const Paragraph = ({ children }: React.PropsWithChildren) => (
  <Typography component="p" variant="subtitle2" maxWidth="60ch">
    {children}
  </Typography>
);

const BaselineSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Stack gap={3}>
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
      <Paragraph>
        The warlock baseline starts with 16 CHA, increases it to 18 at 4th level
        and 20 at 8th level, and attacks using Eldritch Blast with Agonizing
        Blast and Hex.
      </Paragraph>
      <Paragraph>
        The fighter baseline starts with 16 DEX, the Archery Fighting Style, and
        the Crossbow Expert feat. It takes the Sharpshooter feat at 4th level
        and increases DEX to 18 at 6th level and 20 at 8th level.
      </Paragraph>
      <Paragraph>
        The rogue baseline starts with 16 DEX and uses a rapier with Sneak
        Attack. It increases DEX to 18 at 4th level and 20 at 8th level.
      </Paragraph>
    </Stack>
  );
};

export default BaselineSelect;
