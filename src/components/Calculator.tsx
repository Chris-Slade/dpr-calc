import * as React from "react";
import { Grid, Typography } from "@mui/material";
import chanceToHit from "services/chanceToHit";
import damagePerAttack from "services/damagePerAttack";
import Advantage from "types/Advantage";
import DamageDice from "types/DamageDice";
import AdvantageSelect from "./AdvantageSelect";
import DamageDiceInput from "./DamageDiceInput";
import Number from "./Number";
import NumericInput from "./NumericInput";

const { useState } = React;

const Calculator: React.FC = () => {
  const [targetAC, setTargetAC] = useState<number>(0);
  const [toHitMods, setToHitMods] = useState<number>(0);
  const [advantage, setAdvantage] = useState<Advantage>("normal");
  // TODO Allow setting damage independently across attacks
  const [attacks, setAttacks] = useState<number>(0);
  const [damageDice, setDamageDice] = useState<DamageDice>({
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
    d20: 0,
  });
  const [damageMods, setDamageMods] = useState<number>(0);

  const accuracy = chanceToHit(toHitMods, targetAC);

  // TODO Handle crits
  const rawDamage = attacks * damagePerAttack(damageDice, damageMods);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        height: "100%",
        width: "100%",
        padding: 3,
        "& h5": {
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
              Chance to hit: <Number value={accuracy.toHit} />
            </Typography>
            <Typography>
              Chance to hit (advantage):{" "}
              <Number value={accuracy.toHitWithAdvantage} />
            </Typography>
            <Typography>
              Chance to hit (disadvantage):{" "}
              <Number value={accuracy.toHitWithDisadvantage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Damage</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Damage per round: <Number value={accuracy.toHit * rawDamage} />
            </Typography>
            <Typography>
              Damage per round (advantage):{" "}
              <Number value={accuracy.toHitWithAdvantage * rawDamage} />
            </Typography>
            <Typography>
              Damage per round (disadvantage):{" "}
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
