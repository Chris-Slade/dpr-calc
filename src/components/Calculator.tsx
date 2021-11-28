import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  AttackProgressionSelect,
  BaAttackCheckbox,
  DamageDiceInput,
  Number,
  NumericInput,
} from 'components';
import { chanceToHit, damagePerAttack, profBonus } from 'services';
import { AttackProgression, DamageDice, NumericInputValue } from 'types';

const { useState } = React;

const Calculator: React.FC = () => {
  const [targetAC, setTargetAC] = useState<NumericInputValue>(0);
  const [toHitMods, setToHitMods] = useState<NumericInputValue>(0);
  const [level, setLevel] = useState<NumericInputValue>(1);
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
  const [attackProgression, setAttackProgression] =
    useState<AttackProgression>('');
  const [baAttack, setBaAttack] = useState(false);

  const pb = profBonus(level);

  const accuracy = chanceToHit(toHitMods + pb, targetAC);

  // TODO Handle crits
  const rawDamage = attacks * damagePerAttack(damageDice, damageMods);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        height: '100%',
        width: '100%',
        padding: 3,
        '& h5': {
          marginTop: 3,
        },
      }}
    >
      <Grid item xs={12} md={3}>
        <Grid item>
          <Typography variant="h4">Inputs</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Accuracy</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <NumericInput
              label="To-Hit Modifiers"
              name="to-hit"
              value={toHitMods}
              onChange={setToHitMods}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <NumericInput
              label={`Level/CR (PB = ${pb})`}
              name="level"
              value={level}
              onChange={setLevel}
              InputProps={{
                inputProps: {
                  min: 0,
                  max: 30,
                },
              }}
              disabled={Boolean(attackProgression)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <NumericInput
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
              label="Target AC"
              name="ac"
              value={targetAC}
              onChange={setTargetAC}
            />
          </Grid>
          <Grid item xs={8}>
            <AttackProgressionSelect
              value={attackProgression}
              onChange={setAttackProgression}
            />
          </Grid>
          <Grid item xs={4}>
            <BaAttackCheckbox
              value={baAttack}
              onChange={setBaAttack}
              disabled={!attackProgression}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Damage</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <NumericInput
              label="Number of Attacks"
              name="attacks"
              value={attacks}
              onChange={setAttacks}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <NumericInput
              label="Damage Modifiers"
              value={damageMods}
              onChange={setDamageMods}
            />
          </Grid>
          <Grid item xs={12}>
            <DamageDiceInput value={damageDice} onChange={setDamageDice} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={9}>
        <Grid item>
          <Typography variant="h4">Outputs</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Accuracy</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Chance to hit: <Number value={accuracy.toHit} /> <br />
              Chance to hit (advantage):{' '}
              <Number value={accuracy.toHitWithAdvantage} /> <br />
              Chance to hit (disadvantage):{' '}
              <Number value={accuracy.toHitWithDisadvantage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Damage</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Damage per round: <Number value={accuracy.toHit * rawDamage} />
              <br />
              Damage per round (advantage):{' '}
              <Number value={accuracy.toHitWithAdvantage * rawDamage} /> <br />
              Damage per round (disadvantage):{' '}
              <Number value={accuracy.toHitWithDisadvantage * rawDamage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" variant="subtitle2">
              Note: Critical hits/misses, crit damage, and independent
              accuracy/damage per attack are WIP.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Calculator;
