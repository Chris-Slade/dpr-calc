import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import {
  AdvantageSelect,
  Attacks,
  DamageDiceInput,
  Number,
  NumericInput,
  TargetAC,
  ToHit,
} from 'components';
import {
  calculateBaseline,
  chanceToCrit,
  chanceToHit,
  damagePerAttack,
  profBonus,
} from 'services';
import { Advantage, DamageDice, NumericInputValue } from 'types';

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
  const [critThreshold, setCritThreshold] = useState<number>(20);

  const pb = profBonus(level);

  const critChance = chanceToCrit(critThreshold, advantage);

  const accuracy = chanceToHit(toHitMods, targetAC, critThreshold, advantage);

  const damage =
    attacks * damagePerAttack(accuracy, critChance, damageDice, damageMods);

  const baseline = calculateBaseline(level, targetAC, advantage);

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
      <Grid item xs={12} md={6}>
        <Grid item>
          <Typography variant="h4">Inputs</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Accuracy</Typography>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <ToHit value={toHitMods} onChange={setToHitMods} level={level} />
          </Grid>
          <Grid item xs={12}>
            <TargetAC value={targetAC} onChange={setTargetAC} level={level} />
          </Grid>
          <Grid item xs={12}>
            <AdvantageSelect value={advantage} onChange={setAdvantage} />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Damage</Typography>
          </Grid>
          <Grid item xs={12}>
            <Attacks level={level} value={attacks} onChange={setAttacks} />
          </Grid>
          <Grid item xs={12} md={6}>
            <NumericInput
              label="Damage Modifiers"
              title="Any modifiers to damage, such as your attack modifier, Sharpshooter, +1/+2/+3 weapons, etc."
              value={damageMods}
              onChange={setDamageMods}
            />
          </Grid>
          <Grid item xs={12}>
            <DamageDiceInput value={damageDice} onChange={setDamageDice} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item>
          <Typography variant="h4">Outputs</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Accuracy</Typography>
          </Grid>
          <Grid item xs={12}>
            <Number label="Combined + to hit" value={toHitMods} />
            <Number
              label={`Chance to hit AC ${targetAC}`}
              style="percent"
              value={accuracy}
            />
            <Number
              label="Baseline chance to hit"
              style="percent"
              value={baseline.accuracy}
            />
            <Number
              label="Percent of baseline"
              style="percent"
              value={accuracy / baseline.accuracy}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Damage</Typography>
          </Grid>
          <Grid item xs={12}>
            <Number label="Average damage per round" value={damage} />
            <Number
              label="Baseline average damage per round"
              value={baseline.damage}
            />
            <Number
              label="Percentage of baseline"
              style="percent"
              value={damage / baseline.damage}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" variant="subtitle2" maxWidth="80ch">
              The accuracy and damage baseline is equal to a warlock who begins
              with 16 CHA, increases it to 18 at 4th level and 20 at 8th level,
              and attacks using Eldritch Blast with Agonizing Blast and Hex.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Calculator;
