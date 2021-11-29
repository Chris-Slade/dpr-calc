import * as React from 'react';
import { Box, FormLabel, styled } from '@mui/material';
import { ControlledInputProps, DamageDice as Value, Die } from 'types';
import NumericInput from './NumericInput';

interface Props extends ControlledInputProps<Value> {}

const dice: Die[] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];

const InputGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  gridTemplate: 'repeat(6, 1fr) / 1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplate: 'repeat(3, 1fr) / repeat(2, 1fr)',
  },
}));

const DamageDieInput: React.FC<{
  die: Die;
  value: Value;
  onChange: (value: Value) => unknown;
}> = ({ die, value, onChange }) => (
  <NumericInput
    label={die}
    name={die}
    value={value[die]}
    onChange={(newValue) =>
      onChange({
        ...value,
        [die]: newValue,
      })
    }
  />
);

const DamageDiceInput: React.FC<Props> = ({ value, onChange }) => (
  <Box display="flex" flexDirection="column">
    <FormLabel sx={{ marginBottom: 3 }}>Damage Dice</FormLabel>
    <InputGrid>
      {dice.map((die, key) => (
        <DamageDieInput key={key} die={die} value={value} onChange={onChange} />
      ))}
    </InputGrid>
  </Box>
);

export default DamageDiceInput;
