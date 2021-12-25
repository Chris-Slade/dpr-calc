import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AdditionalMods,
  AdvantageSelect,
  AttackMods,
  Attacks,
  DamageDiceInput,
  DamageMods,
  NumericInput,
  Outputs,
  TargetAC,
} from 'components';
import { profBonus } from 'services';
import {
  Advantage,
  AdditionalModValues,
  DamageDice,
  NumericInputValue,
} from 'types';

const { useState } = React;

const Page = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '0 100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: '100%',
  width: '100%',
  padding: theme.spacing(1),
  gap: theme.spacing(1),
}));

const Section = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  gap: theme.spacing(3),
  flex: '1 1 0px',
  minWidth: '20em',
}));

const Calculator: React.FC = () => {
  const [targetAC, setTargetAC] = useState<NumericInputValue>(0);
  const [attackMods, setAttackMods] = useState<NumericInputValue>(0);
  const [additionalMods, setAdditionalMods] = useState<AdditionalModValues>({
    archeryFightingStyle: false,
    duelingFightingStyle: false,
    bless: false,
    powerAttack: false,
    plusOneWeapon: false,
    plusTwoWeapon: false,
    plusThreeWeapon: false,
  });
  const [proficient, setProficient] = useState<boolean>(false);
  const [level, setLevel] = useState<NumericInputValue>(1);
  const [advantage, setAdvantage] = useState<Advantage>('normal');
  // TODO Allow setting damage independently across attacks
  const [attacks, setAttacks] = useState<NumericInputValue>(0);
  const [damageDice, setDamageDice] = useState<DamageDice>({
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
    d20: 0,
  });
  const [damageMods, setDamageMods] = useState<NumericInputValue>(0);
  const [critThreshold, setCritThreshold] = useState<number>(20);

  const pb = profBonus(level);

  return (
    <Page>
      <Section>
        <Typography variant="h5">Accuracy</Typography>
        <NumericInput
          label={`Level/CR (PB = ${pb})`}
          title="The level or Challenge Rating (CR) of the attacker, which determines its Proficiency Bonus (PB)."
          name="level"
          value={level}
          onChange={setLevel}
          InputProps={{
            inputProps: {
              min: 0,
              max: 30,
            },
          }}
        />
        <AttackMods
          value={attackMods}
          onChange={setAttackMods}
          proficient={proficient}
          setProficient={setProficient}
          level={level}
        />
        <TargetAC value={targetAC} onChange={setTargetAC} level={level} />
        <NumericInput
          label="Crit Threshold"
          title="The minimum roll on the d20 needed to get a critical hit."
          InputProps={{
            inputProps: {
              min: 1,
              max: 20,
            },
          }}
          value={critThreshold}
          onChange={setCritThreshold}
        />
        <AdditionalMods value={additionalMods} onChange={setAdditionalMods} />
        <AdvantageSelect value={advantage} onChange={setAdvantage} />
      </Section>

      <Section>
        <Typography variant="h5">Damage</Typography>
        <Attacks level={level} value={attacks} onChange={setAttacks} />
        <DamageMods
          value={damageMods}
          onChange={setDamageMods}
          attackModifiersSansPb={proficient ? attackMods - pb : attackMods}
        />
        <DamageDiceInput value={damageDice} onChange={setDamageDice} />
      </Section>

      <Section sx={{ flexGrow: 2 }}>
        <Typography variant="h5">Outputs</Typography>
        <Outputs
          additionalMods={additionalMods}
          advantage={advantage}
          attackMods={attackMods}
          attacks={attacks}
          critThreshold={critThreshold}
          damageDice={damageDice}
          damageMods={damageMods}
          level={level}
          targetAC={targetAC}
        />
        <Typography component="p" variant="subtitle2" maxWidth="80ch">
          The accuracy and damage baseline is equal to a warlock who begins with
          16 CHA, increases it to 18 at 4th level and 20 at 8th level, and
          attacks using Eldritch Blast with Agonizing Blast and Hex.
        </Typography>
      </Section>
    </Page>
  );
};

export default Calculator;
