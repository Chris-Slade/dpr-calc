import React from 'react';
import { Stack } from '@mui/material';
import { DamageMods, DiceInput } from 'components';
import { ControlledInputProps, Dice, NumericInputValue } from 'types';

interface Props {
  label: string;
  title: string;
  damageMods: ControlledInputProps<NumericInputValue>['value'];
  setDamageMods: ControlledInputProps<NumericInputValue>['onChange'];
  damageDice: ControlledInputProps<Dice>['value'];
  setDamageDice: ControlledInputProps<Dice>['onChange'];
  attackModDefault?: NumericInputValue;
}

const DamageInput: React.FC<Props> = ({
  label,
  title,
  damageMods,
  setDamageMods,
  damageDice,
  setDamageDice,
  attackModDefault,
}) => {
  return (
    <Stack gap={3}>
      <DiceInput
        label={label}
        title={title}
        value={damageDice}
        onChange={setDamageDice}
      >
        <DamageMods
          title={title}
          value={damageMods}
          onChange={setDamageMods}
          attackModDefault={attackModDefault}
        />
      </DiceInput>
    </Stack>
  );
};

export default DamageInput;
