import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Checkbox, NumericInput } from 'components';
import { ControlledInputProps, NumericInputValue } from 'types';

interface Props extends ControlledInputProps<NumericInputValue> {
  title: string;
  attackModDefault?: number;
}

const DamageMods: React.FC<Props> = ({
  title,
  value,
  onChange,
  attackModDefault,
}) => {
  const [useAttackMod, setUseAttackMod] = useState<boolean>(false);

  useEffect(() => {
    if (useAttackMod && attackModDefault != null) {
      onChange(attackModDefault);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useAttackMod, attackModDefault]);

  return (
    <Stack flexDirection="row" gap={3}>
      <NumericInput
        label="Modifiers"
        title={title}
        value={value}
        onChange={onChange}
        disabled={useAttackMod}
      />
      {attackModDefault != null ? (
        <Checkbox
          label="Use attack mod"
          title="If checked, the attack mod will be used as the damage mod."
          value={useAttackMod}
          onChange={setUseAttackMod}
        />
      ) : null}
    </Stack>
  );
};

export default DamageMods;
