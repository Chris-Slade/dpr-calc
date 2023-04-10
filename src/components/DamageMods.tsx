import * as React from 'react';
import { Box } from '@mui/material';
import { Checkbox, NumericInput } from 'components';
import { ControlledInputProps, NumericInputValue } from 'types';

const { useEffect, useState } = React;

interface Props extends ControlledInputProps<NumericInputValue> {
  attackModifiersSansPb: number;
}

const DamageMods: React.FC<Props> = ({
  attackModifiersSansPb,
  value,
  onChange,
}) => {
  const [useAttackMod, setUseAttackMod] = useState<boolean>(false);

  useEffect(() => {
    if (useAttackMod) {
      onChange(attackModifiersSansPb);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useAttackMod, attackModifiersSansPb]);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
      <NumericInput
        sx={{ flexGrow: 1 }}
        label="Damage Mods"
        title="Any modifiers to damage, such as your attack modifier, Sharpshooter, +1/+2/+3 weapons, etc."
        value={value}
        onChange={onChange}
        disabled={useAttackMod}
      />
      <Checkbox
        label="Same as attack mod"
        title="If checked, the attack mod minus your Proficiency Bonus will be used as the damage mod."
        value={useAttackMod}
        onChange={setUseAttackMod}
      />
    </Box>
  );
};

export default DamageMods;
