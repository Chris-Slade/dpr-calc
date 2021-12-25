import * as React from 'react';
import { Box } from '@mui/material';
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
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
      <NumericInput
        sx={{ flexGrow: 1 }}
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
        label="Use average AC"
        title="Use the average AC for a monster whose CR equals your level (equal to 13 + CR/3 for CRs above 1/8)."
        value={useAverageAC}
        onChange={setUseAverageAC}
      />
    </Box>
  );
};

export default TargetAC;
