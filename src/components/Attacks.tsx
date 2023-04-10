import * as React from 'react';
import { ControlledInputProps, NumericInputValue } from 'types';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import NumericInput from './NumericInput';
import { cantripAttacks, fighterAttacks } from 'services';

const { useEffect, useState } = React;

interface Props extends ControlledInputProps<NumericInputValue> {
  level: number;
}

type InputType = 'manual' | 'fighter' | 'cantrip' | 'fighter-ba';

const Attacks: React.FC<Props> = ({ value, onChange, level }) => {
  const [inputType, setInputType] = useState<InputType>('manual');

  useEffect(() => {
    if (inputType === 'cantrip') {
      onChange(cantripAttacks(level));
    } else if (inputType === 'fighter') {
      onChange(fighterAttacks(level));
    } else if (inputType === 'fighter-ba') {
      onChange(fighterAttacks(level) + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, inputType]);

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ marginBottom: 1 }}>
          Attack Progression
        </FormLabel>
        <RadioGroup
          aria-label="Attack Progression"
          defaultValue="manual"
          name="radio-buttons-group"
          value={inputType}
          onChange={(e) => setInputType(e.target.value as InputType)}
        >
          <FormControlLabel
            value="manual"
            control={<Radio />}
            label={
              <NumericInput
                label="Manual"
                title="Total number of attacks the attacker makes during a round."
                name="attacks"
                value={value}
                size="small"
                onChange={onChange}
                disabled={inputType !== 'manual'}
              />
            }
          />
          <FormControlLabel
            value="fighter"
            control={<Radio />}
            label="Fighter"
          />
          <FormControlLabel
            value="fighter-ba"
            control={<Radio />}
            label="Fighter (with BA attack)"
          />
          <FormControlLabel
            value="cantrip"
            control={<Radio />}
            label="Cantrip (EB)"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Attacks;
