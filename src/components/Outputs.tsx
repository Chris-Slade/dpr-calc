import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { BaselineSelect, Number } from 'components';
import {
  applyAdditionalMods,
  calculateBaseline,
  calculateDamage,
} from 'services';
import { AdditionalModValues, Advantage, Baseline, Dice } from 'types';

interface Props {
  additionalMods: AdditionalModValues;
  advantage: Advantage;
  attackMods: number;
  attacks: number;
  baselineAdvantage: Advantage;
  bonusDice: Partial<Dice>;
  critBonus: number;
  critBonusDice: Partial<Dice>;
  critThreshold: number;
  damageDice: Dice;
  damageMods: number;
  firstHitBonus: number;
  firstHitBonusDice: Dice;
  level: number;
  penaltyDice: Partial<Dice>;
  targetAC: number;
}

type Row = { label: string; style: 'decimal' | 'percent'; value: number };

const Output: React.FC<{ title: string; rows: Row[] }> = ({ title, rows }) => (
  <TableContainer
    component={Paper}
    elevation={1}
    sx={{
      maxWidth: 'max-content',
    }}
  >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell
            colSpan={2}
            variant="head"
            sx={{ fontWeight: 'h3.fontWeight' }}
          >
            {title}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.label}>
            <TableCell>{row.label}</TableCell>
            <TableCell>
              <Number value={row.value} style={row.style} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const Outputs: React.FC<Props> = ({
  additionalMods,
  advantage,
  attackMods: baseAttackMods,
  attacks,
  baselineAdvantage,
  bonusDice,
  critBonus,
  critBonusDice,
  critThreshold,
  damageDice,
  damageMods: baseDamageMods,
  firstHitBonus,
  firstHitBonusDice,
  level,
  penaltyDice,
  targetAC,
}) => {
  const [baselineType, setBaselineType] = useState<Baseline>('warlock');

  const [attackMods, damageMods] = applyAdditionalMods(
    additionalMods,
    baseAttackMods,
    baseDamageMods,
    level
  );

  const { accuracy, damage } = calculateDamage({
    advantage,
    attackMods,
    attacks,
    bonusDice,
    critBonus,
    critBonusDice,
    critThreshold,
    damageDice,
    damageMods,
    firstHitBonus,
    firstHitBonusDice,
    penaltyDice,
    targetAC,
  });

  const baseline = calculateBaseline(
    baselineType,
    level,
    targetAC,
    baselineAdvantage
  );

  const accuracyRows: Row[] = [
    {
      label: 'Sum of attack modifiers',
      style: 'decimal',
      value: attackMods,
    },
    {
      label: `Chance to hit AC ${targetAC}`,
      style: 'percent',
      value: accuracy,
    },
    {
      label: 'Baseline chance to hit',
      style: 'percent',
      value: baseline.accuracy,
    },
    {
      label: 'Percentage of baseline',
      style: 'percent',
      value: accuracy / baseline.accuracy,
    },
  ];
  const damageRows: Row[] = [
    {
      label: 'Sum of damage modifiers',
      style: 'decimal',
      value: damageMods,
    },
    {
      label: 'Average damage per round',
      style: 'decimal',
      value: damage,
    },
    {
      label: 'Baseline average damage per round',
      style: 'decimal',
      value: baseline.damage,
    },
    {
      label: 'Percentage of baseline',
      style: 'percent',
      value: damage / baseline.damage,
    },
  ];

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
      <Output title="Accuracy" rows={accuracyRows} />
      <Output title="Damage" rows={damageRows} />
      <BaselineSelect value={baselineType} onChange={setBaselineType} />
      <Typography component="p" variant="subtitle2" maxWidth="80ch">
        The warlock baseline starts with 16 CHA, increases it to 18 at 4th level
        and 20 at 8th level, and attacks using Eldritch Blast with Agonizing
        Blast and Hex.
      </Typography>
      <Typography component="p" variant="subtitle2" maxWidth="80ch">
        The fighter baseline starts with 16 DEX, the Archery Fighting Style, and
        the Crossbow Expert feat. It takes the Sharpshooter feat at 4th level
        and increases DEX to 18 at 6th level and 20 at 8th level.
      </Typography>
      <Typography component="p" variant="subtitle2" maxWidth="80ch">
        The rogue baseline starts with 16 DEX and uses a rapier with Sneak
        Attack. It increases DEX to 18 at 4th level and 20 at 8th level.
      </Typography>
    </Box>
  );
};

export default Outputs;
