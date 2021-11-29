import { Advantage } from 'types';
import { chanceToCrit, chanceToCritMiss, clamp } from 'services';

export default (
  toHitMods: number,
  targetAC: number,
  critOn: number,
  advantage: Advantage = 'normal'
) => {
  const critHitChance = chanceToCrit(critOn, 'normal');
  const critMissChance = chanceToCritMiss('normal');

  const toHit = clamp(
    (21 + toHitMods - targetAC) / 20,
    critHitChance,
    1 - critMissChance
  );
  const toMiss = 1 - toHit;

  return advantage === 'normal'
    ? toHit
    : advantage === 'advantage'
    ? 1 - toMiss ** 2
    : toHit ** 2;
};
