import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Box,
} from '@mui/material';
import { Number } from 'components';
import {
  calculateBaseline,
  chanceToCrit,
  chanceToHit,
  damagePerAttack,
} from 'services';
import { Advantage, DamageDice } from 'types';

interface Props {
  advantage: Advantage;
  attacks: number;
  critThreshold: number;
  damageDice: DamageDice;
  damageMods: number;
  level: number;
  targetAC: number;
  toHitMods: number;
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
  advantage,
  attacks,
  critThreshold,
  damageDice,
  damageMods,
  level,
  targetAC,
  toHitMods,
}) => {
  const critChance = chanceToCrit(critThreshold, advantage);
  const accuracy = chanceToHit(toHitMods, targetAC, critThreshold, advantage);
  const damage =
    attacks * damagePerAttack(accuracy, critChance, damageDice, damageMods);
  const baseline = calculateBaseline(level, targetAC, advantage);

  const accuracyRows: Row[] = [
    {
      label: 'Combined + to hit',
      style: 'decimal',
      value: toHitMods,
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
    </Box>
  );
};

export default Outputs;
