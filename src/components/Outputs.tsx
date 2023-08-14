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
          <TableCell colSpan={2} variant="head">
            <Typography variant="subtitle1">{title}</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
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
    level,
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
    baselineAdvantage,
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
      value: accuracy.hitChance,
    },
    {
      label: 'Baseline chance to hit',
      style: 'percent',
      value: baseline.accuracy,
    },
    {
      label: 'Percentage of baseline',
      style: 'percent',
      value: accuracy.hitChance / baseline.accuracy,
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
  const additionalRows: Row[] = [
    {
      label: 'Chance of at least one hit',
      style: 'percent',
      value: accuracy.atLeastOneHit,
    },
    {
      label: 'Chance of at least one crit',
      style: 'percent',
      value: accuracy.atLeastOneCrit,
    },
    {
      label: 'Chance that first hit is a crit',
      style: 'percent',
      value: accuracy.firstHitCrits,
    },
  ];

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
      <Output title="Accuracy" rows={accuracyRows} />
      <Output title="Damage" rows={damageRows} />
      <Output title="Additional Probabilities" rows={additionalRows} />
      <BaselineSelect value={baselineType} onChange={setBaselineType} />
    </Box>
  );
};

export default Outputs;
