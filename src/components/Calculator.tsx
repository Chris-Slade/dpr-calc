import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  AdvantageSelect,
  DamageDiceInput,
  Number,
  NumericInput,
} from 'components';
import {
  calculateBaseline,
  chanceToHit,
  damagePerAttack,
  profBonus,
} from 'services';
import { Advantage, DamageDice, NumericInputValue } from 'types';
import chanceToCrit from 'services/chanceToCrit';

const { useState } = React;

const Calculator: React.FC = () => {
  const [targetAC, setTargetAC] = useState<NumericInputValue>(0);
  const [toHitMods, setToHitMods] = useState<NumericInputValue>(0);
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

  const pb = profBonus(level);

  const accuracy = chanceToHit(toHitMods + pb, targetAC, advantage);

  const critChance = chanceToCrit(20 /* TODO */, advantage);

  const damage =
    attacks * damagePerAttack(accuracy, critChance, damageDice, damageMods);

  const baseline = calculateBaseline(level, targetAC, advantage);

  console.log(chanceToCrit(20, 'normal')); // XXX

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
          <Grid item xs={12}>
            <AdvantageSelect value={advantage} onChange={setAdvantage} />
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
              Chance to hit: <Number value={accuracy} /> <br />
              Baseline: <Number value={baseline.accuracy} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Damage</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Damage per round: <Number value={damage} />
            </Typography>
            <Typography>
              Baseline: <Number value={baseline.damage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" variant="subtitle2">
              The accuracy and damage baseline is equal to a warlock who begins
              with 16 CHA, increases it to 18 at 4th level and 20 at 8th level,
              and attacks using Eldritch Blast with Agonizing Blast.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Calculator;
