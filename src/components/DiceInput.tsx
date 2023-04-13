import React from 'react';
import { Box, FormLabel, Stack, styled } from '@mui/material';
import { ControlledInputProps, Die, Dice as Value } from 'types';
import NumericInput from './NumericInput';

interface Props extends ControlledInputProps<Value> {
  label: string;
  title?: string;
}

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

const DieInput: React.FC<{
  die: Die;
  value: Value;
  onChange: (value: Value) => unknown;
}> = ({ die, value, onChange }) => (
  <StyledInput
    label={die}
    name={die}
    value={value[die]}
    onChange={newValue =>
      onChange({
        ...value,
        [die]: newValue,
      })
    }
    inputProps={{ min: 0 }}
  />
);

const DiceInput = ({
  label,
  title,
  value,
  onChange,
  children,
}: React.PropsWithChildren<Props>) => (
  <Stack flexDirection="column" title={title}>
    <FormLabel sx={{ marginBottom: 3 }}>{label}</FormLabel>
    <InputGrid>
      {dice.map((die, key) => (
        <DieInput key={key} die={die} value={value} onChange={onChange} />
      ))}
      {children}
    </InputGrid>
  </Stack>
);

export default DiceInput;
