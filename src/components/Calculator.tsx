import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AdditionalMods,
  AdvantageSelect,
  Attacks,
  DamageInput,
  DiceInput,
  NumericInput,
  Outputs,
  Switch,
  TargetAC,
} from 'components';
import { profBonus } from 'services';
import { AdditionalModValues, Advantage, Dice, NumericInputValue } from 'types';

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

const DEFAULT_DICE: Readonly<Dice> = Object.freeze({
  d4: 0,
  d6: 0,
  d8: 0,
  d10: 0,
  d12: 0,
  d20: 0,
});

const Calculator: React.FC = () => {
  const [targetAC, setTargetAC] = useState<NumericInputValue>(0);
  const [attackMods, setAttackMods] = useState<NumericInputValue>(0);
  const [additionalMods, setAdditionalMods] = useState<AdditionalModValues>({
    archeryFightingStyle: false,
    duelingFightingStyle: false,
    powerAttack: false,
    proficient: false,
    plusOneWeapon: false,
    plusTwoWeapon: false,
    plusThreeWeapon: false,
    rage: false,
  });
  const [level, setLevel] = useState<NumericInputValue>(1);
  const [critThreshold, setCritThreshold] = useState<number>(20);
  const [bonusDice, setBonusDice] = useState(DEFAULT_DICE);
  const [penaltyDice, setPenaltyDice] = useState(DEFAULT_DICE);
  const [advantage, setAdvantage] = useState<Advantage>('normal');
  const [baselineAdvantage, setBaselineAdvantage] =
    useState<Advantage>('normal');
  // TODO Allow setting damage independently across attacks
  const [attacks, setAttacks] = useState<NumericInputValue>(0);
  const [damageDice, setDamageDice] = useState<Dice>(DEFAULT_DICE);
  const [damageMods, setDamageMods] = useState<NumericInputValue>(0);

  const [showAdvancedAccuracy, setShowAdvancedAccuracy] = useState(false);
  const [showAdvancedDamage, setShowAdvancedDamage] = useState(false);
  const [firstHitBonus, setFirstHitBonus] = useState<NumericInputValue>(0);
  const [firstHitBonusDice, setFirstHitBonusDice] = useState(DEFAULT_DICE);
  const [critBonus, setCritBonus] = useState<NumericInputValue>(0);
  const [critBonusDice, setCritBonusDice] = useState(DEFAULT_DICE);

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
        <NumericInput
          label="Attack Mods"
          title="Any modifiers to hit besides proficiency bonus, such as your attack modifier, Archery, Sharpshooter, +1/2/3 weapons, etc."
          value={attackMods}
          onChange={setAttackMods}
        />
        <TargetAC value={targetAC} onChange={setTargetAC} level={level} />
        <AdditionalMods value={additionalMods} onChange={setAdditionalMods} />
        <Switch
          label="Show Advanced Options"
          value={showAdvancedAccuracy}
          onChange={() => {
            setShowAdvancedAccuracy(v => !v);
          }}
        />
        {showAdvancedAccuracy && (
          <>
            <AdvantageSelect
              label="Advantage/Disadvantage"
              value={advantage}
              onChange={setAdvantage}
            />
            <AdvantageSelect
              label="Baseline Advantage/Disadvantage"
              value={baselineAdvantage}
              onChange={setBaselineAdvantage}
            />
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
            <DiceInput
              label="Bonus Dice"
              title="Any dice that are added to your to-hit bonus (e.g. Bless)."
              value={bonusDice}
              onChange={setBonusDice}
            />
            <DiceInput
              label="Penalty Dice"
              title="Any dice that are subtracted from your to-hit bonus (e.g. Bane)."
              value={penaltyDice}
              onChange={setPenaltyDice}
            />
          </>
        )}
      </Section>

      <Section>
        <Typography variant="h5">Damage</Typography>
        <Attacks level={level} value={attacks} onChange={setAttacks} />
        <DamageInput
          label="Damage"
          title={
            'The dice and modifiers that make up your base attack damage,' +
            ' such as your attack modifier, Sharpshooter, +1/+2/+3 weapons,' +
            ' Improved Divine Smite, etc. Shortcuts for common bonuses can be' +
            ' found in the advanced options of the Accuracy section.'
          }
          damageMods={damageMods}
          setDamageMods={setDamageMods}
          damageDice={damageDice}
          setDamageDice={setDamageDice}
          attackModDefault={attackMods}
        />
        <Switch
          label="Show Advanced Options"
          value={showAdvancedDamage}
          onChange={() => {
            setShowAdvancedDamage(v => !v);
          }}
        />
        {showAdvancedDamage && (
          <>
            <DamageInput
              label="First-Hit Bonus Damage"
              title="Bonus damage that is only dealt on the first hit you make on a turn (e.g. Sneak Attack, Favored Foe)."
              damageMods={firstHitBonus}
              setDamageMods={setFirstHitBonus}
              damageDice={firstHitBonusDice}
              setDamageDice={setFirstHitBonusDice}
            />
            <DamageInput
              label="Critical-Hit Bonus Damage"
              title={
                'Bonus damage dealt on a critical (e.g. Brutal Critical,' +
                ' Vicious Weapon). Note that the doubling of your damage' +
                ' dice on a crit is done automatically; this is only for' +
                ' additional dice from other features.'
              }
              damageMods={critBonus}
              setDamageMods={setCritBonus}
              damageDice={critBonusDice}
              setDamageDice={setCritBonusDice}
            />
          </>
        )}
      </Section>

      <Section sx={{ flexGrow: 2 }}>
        <Typography variant="h5">Outputs</Typography>
        <Outputs
          additionalMods={additionalMods}
          advantage={advantage}
          attackMods={attackMods}
          attacks={attacks}
          baselineAdvantage={baselineAdvantage}
          bonusDice={bonusDice}
          critBonus={critBonus}
          critBonusDice={critBonusDice}
          critThreshold={critThreshold}
          damageDice={damageDice}
          damageMods={damageMods}
          firstHitBonus={firstHitBonus}
          firstHitBonusDice={firstHitBonusDice}
          level={level}
          penaltyDice={penaltyDice}
          targetAC={targetAC}
        />
      </Section>
    </Page>
  );
};

export default Calculator;
