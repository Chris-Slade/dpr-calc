import * as React from 'react';
import { Checkbox, NumericInput } from 'components';
import { averageMonsterAC } from 'services';
import { ControlledInputProps, NumericInputValue } from 'types';

const { useEffect, useState } = React;

interface Props extends ControlledInputProps<NumericInputValue> {
  level: number;
}

const TargetAC: React.FC<Props> = ({ level, onChange, value }) => {
  const [useAverageAC, setUseAverageAC] = useState<boolean>(false);
  useEffect(() => {
    if (useAverageAC) {
      onChange(averageMonsterAC(level));
    }
  }, [level, useAverageAC]);

  return (
    <>
      <NumericInput
        InputProps={{
          inputProps: {
            min: 0,
          },
        }}
        label="Target AC"
        title="The Armor Class (AC) of the enemy being attacked."
        name="ac"
        value={value}
        onChange={onChange}
        disabled={useAverageAC}
      />
      <Checkbox
        label="Use average AC where enemy CR = your level"
        value={useAverageAC}
        onChange={setUseAverageAC}
      />
    </>
  );
};

export default TargetAC;
