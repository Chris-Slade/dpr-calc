import * as React from 'react';
import { Box, FormLabel, styled } from '@mui/material';
import { ControlledInputProps, DamageDice as Value, Die } from 'types';
import NumericInput from './NumericInput';

interface Props extends ControlledInputProps<Value> {}

const dice: Die[] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];

const InputGrid = styled(Box)(({ theme }) => ({
  gap: theme.spacing(3),
  display: 'flex',
  flexFlow: 'row wrap',
  flex: '1 1 0',
  maxWidth: `calc(3 * (10ch + ${theme.spacing(3)}))`,
}));

const StyledInput = styled(NumericInput)({
  maxWidth: '10ch',
});

const DamageDieInput: React.FC<{
  die: Die;
  value: Value;
  onChange: (value: Value) => unknown;
}> = ({ die, value, onChange }) => (
  <StyledInput
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
