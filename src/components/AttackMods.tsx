import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Checkbox, NumericInput } from 'components';
import { profBonus } from 'services';
import { ControlledInputProps, NumericInputValue } from 'types';

interface Props extends ControlledInputProps<NumericInputValue> {
  level: number;
  proficient: boolean;
  setProficient: ControlledInputProps<boolean>['onChange'];
}

const AttackMods: React.FC<Props> = ({
  onChange,
  level,
  proficient,
  setProficient,
}) => {
  const [modifiersSansPb, setModifiersSansPb] = useState<number>(0);

  useEffect(() => {
    onChange(proficient ? modifiersSansPb + profBonus(level) : modifiersSansPb);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modifiersSansPb, proficient, level]);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
      <NumericInput
        sx={{ flexGrow: 1 }}
        label="Attack Mods"
        title="Any modifiers to hit besides proficiency bonus, such as your attack modifier, Archery, Sharpshooter, +1/2/3 weapons, etc."
        name="to-hit"
        value={modifiersSansPb}
        onChange={setModifiersSansPb}
      />
      <Checkbox
        label="Auto proficiency"
        title="If checked, the attacker's Proficiency Bonus will be included in its modifiers on the attack roll(s)."
        value={proficient}
        onChange={setProficient}
      />
    </Box>
  );
};

export default AttackMods;
