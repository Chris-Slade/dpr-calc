import * as React from 'react';
import { FormGroup, FormLabel } from '@mui/material';
import { Checkbox } from 'components';
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
  fieldName: keyof AdditionalModValues,
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
          WEAPON_FIELDS.forEach(weapon => (newValues[weapon] = false));
          newValues[fieldName] = true;
        }
        return newValues;
      });
    },
    [onChange, fieldName],
  ) as React.Dispatch<React.SetStateAction<boolean>>;

const AdditionalMods: React.FC<Props> = ({ value, onChange }) => {
  return (
    <FormGroup>
      <FormLabel component="legend">Additional Bonuses</FormLabel>
      <Checkbox
        label="Archery FS"
        title="Archery Fighting Style (+2 to hit)."
        value={value.archeryFightingStyle}
        onChange={useUpdateHandler(onChange, 'archeryFightingStyle')}
      />
      <Checkbox
        label="Dueling FS"
        title="Dueling Fighting Style (+2 damage; also works for Thrown-Weapon Fighting Style)."
        value={value.duelingFightingStyle}
        onChange={useUpdateHandler(onChange, 'duelingFightingStyle')}
      />
      <Checkbox
        label="Power Attack (-5/+10)"
        title="Power Attacks for Sharpshooter or Great Weapon Master."
        value={value.powerAttack}
        onChange={useUpdateHandler(onChange, 'powerAttack')}
      />
      <Checkbox
        label="Proficiency Bonus"
        value={value.proficient}
        onChange={useUpdateHandler(onChange, 'proficient')}
      />
      <Checkbox
        label="Rage"
        title="Barbarian Rage"
        value={value.rage}
        onChange={useUpdateHandler(onChange, 'rage')}
      />
      <Checkbox
        label="+1 Weapon (+1/+1)"
        value={value.plusOneWeapon}
        onChange={useUpdateHandler(onChange, 'plusOneWeapon')}
      />
      <Checkbox
        label="+2 Weapon (+2/+2)"
        value={value.plusTwoWeapon}
        onChange={useUpdateHandler(onChange, 'plusTwoWeapon')}
      />
      <Checkbox
        label="+3 Weapon (+3/+3)"
        value={value.plusThreeWeapon}
        onChange={useUpdateHandler(onChange, 'plusThreeWeapon')}
      />
    </FormGroup>
  );
};

export default AdditionalMods;
