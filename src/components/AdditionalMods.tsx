import * as React from 'react';
import { FormGroup, FormLabel } from '@mui/material';
import { Switch } from 'components';
import { AdditionalModValues, ControlledInputProps } from 'types';

const { useCallback } = React;

interface Props extends ControlledInputProps<AdditionalModValues> {}

const WEAPON_FIELDS: (keyof AdditionalModValues)[] = [
  'plusOneWeapon',
  'plusTwoWeapon',
  'plusThreeWeapon',
];

const useUpdateHandler = (
  onChange: ControlledInputProps<AdditionalModValues>['onChange'],
  fieldName: keyof AdditionalModValues
) =>
  useCallback(
    (newValue: boolean) => {
      onChange((values: AdditionalModValues) => {
        const newValues = {
          ...values,
          [fieldName]: newValue,
        };
        // +X weapons are mutually exclusive.
        if (WEAPON_FIELDS.includes(fieldName) && newValue) {
          WEAPON_FIELDS.forEach((weapon) => (newValues[weapon] = false));
          newValues[fieldName] = true;
        }
        return newValues;
      });
    },
    [onChange, fieldName]
  );

const AdditionalMods: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend">Additional Bonuses</FormLabel>
      <Switch
        label="Archery FS"
        title="Archery Fighting Style (+2 to hit)."
        value={value.archeryFightingStyle}
        onChange={useUpdateHandler(onChange, 'archeryFightingStyle')}
      />
      <Switch
        label="Dueling FS"
        title="Dueling Fighting Style (+2 damage; also works for Thrown-Weapon Fighting Style)."
        value={value.duelingFightingStyle}
        onChange={useUpdateHandler(onChange, 'duelingFightingStyle')}
      />
      <Switch
        label="Power Attack (-5/+10)"
        title="Power Attacks for Sharpshooter or Great Weapon Master."
        value={value.powerAttack}
        onChange={useUpdateHandler(onChange, 'powerAttack')}
      />
      <Switch
        label="Rage"
        title="Barbarian Rage"
        value={value.rage}
        onChange={useUpdateHandler(onChange, 'rage')}
      />
      <Switch
        label="+1 Weapon (+1/+1)"
        value={value.plusOneWeapon}
        onChange={useUpdateHandler(onChange, 'plusOneWeapon')}
      />
      <Switch
        label="+2 Weapon (+2/+2)"
        value={value.plusTwoWeapon}
        onChange={useUpdateHandler(onChange, 'plusTwoWeapon')}
      />
      <Switch
        label="+3 Weapon (+3/+3)"
        value={value.plusThreeWeapon}
        onChange={useUpdateHandler(onChange, 'plusThreeWeapon')}
      />
    </FormGroup>
  );
};

export default AdditionalMods;
