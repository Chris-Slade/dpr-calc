import * as React from 'react';
import { Checkbox, NumericInput } from 'components';
import { ControlledInputProps, NumericInputValue } from 'types';
import { profBonus } from 'services';

const { useEffect, useState } = React;

interface Props extends ControlledInputProps<NumericInputValue> {
  level: number;
}

const ToHit: React.FC<Props> = ({ onChange, level }) => {
  const [modifiersSansPb, setModifiersSansPb] = useState<number>(0);
  const [proficient, setProficient] = useState<boolean>(true);

  useEffect(() => {
    onChange(proficient ? modifiersSansPb + profBonus(level) : modifiersSansPb);
  }, [modifiersSansPb, proficient]);

  return (
    <>
      <NumericInput
        label="To-Hit Modifiers (sans PB)"
        title="Any modifiers to hit besides proficiency bonus, such as your attack modifier, Archery, Sharpshooter, +1/2/3 weapons, etc."
        name="to-hit"
        value={modifiersSansPb}
        onChange={setModifiersSansPb}
      />
      <Checkbox
        label="Proficient"
        title="If checked, the attacker's Proficiency Bonus will be included in its modifiers on the attack roll(s)."
        value={proficient}
        onChange={setProficient}
      />
    </>
  );
};

export default ToHit;
