import { Advantage } from 'types';

const clamp = (value: number, min: number, max: number) =>
  Math.max(Math.min(value, max), min);

// TODO: Handle nat 1s and 20s properly
export default (
  toHitMods: number,
  targetAC: number,
  advantage: Advantage = 'normal'
) => {
  const toHit = clamp((21 + toHitMods - targetAC) / 20, 0, 1);
  const toMiss = clamp((targetAC - toHitMods - 1) / 20, 0, 1);
  const toHitWithAdvantage = 1 - toMiss ** 2;
  const toHitWithDisadvantage = toHit ** 2;

  return advantage === 'normal'
    ? toHit
    : advantage === 'advantage'
    ? toHitWithAdvantage
    : toHitWithDisadvantage;
};
