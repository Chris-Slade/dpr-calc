import { clamp, sidesOfDie } from 'services';
import { Advantage, Dice, Die } from 'types';

/**
 * Compute the convolution of two probability distributions.
 *
 * @param dist A discrete distribution represented as an array where each index
 * is an outcome and each value is the probabilty of that outcome.
 * @param die The number of faces of a die.
 */
const convolve = (dist: number[], die: number) => {
  for (let i = 1; i <= die; i += 1) {
    dist.push(0);
  }

  for (let j = dist.length - 1; j >= 0; j -= 1) {
    dist[j] = 0;
    for (let k = j - 1; k >= j - die && k >= 0; k -= 1) {
      dist[j] += dist[k];
    }
    dist[j] /= die;
  }
};

/**
 * Compute the distribution of rolling multiple dice and summing up the result.
 */
const sumOfDiceDist = (dice: Partial<Dice>) => {
  const dist = [1];

  for (const diceCount of Object.entries(dice)) {
    const [die, count] = diceCount;
    for (let i = 0; i < count; i++) {
      convolve(dist, sidesOfDie(die as Die));
    }
  }

  return dist;
};

const toHit = (
  toHitMods: number,
  targetAC: number,
  critThreshold: number,
  advantage: Advantage,
) => {
  // You always have at least a (21 - critThreshold) / 20 chance of hitting due
  // to crits and a 1/20 chance of missing due to crit failure. Otherwise it's
  // (21 + toHit - AC) / 20.
  const toHit = clamp(21 + toHitMods - targetAC, 21 - critThreshold, 19) / 20;
  const toMiss = 1 - toHit;

  return advantage === 'normal'
    ? toHit
    : advantage === 'advantage'
    ? 1 - toMiss ** 2
    : advantage === 'super_advantage'
    ? 1 - toMiss ** 3
    : toHit ** 2;
};

export default (
  toHitMods: number,
  targetAC: number,
  critThreshold: number,
  advantage: Advantage = 'normal',
  bonusDice: Partial<Dice> = {},
  penaltyDice: Partial<Dice> = {},
) => {
  const bonusDist = sumOfDiceDist(bonusDice);
  const penaltyDist = sumOfDiceDist(penaltyDice);

  let hitChance = 0;

  for (let bonus = 0; bonus < bonusDist.length; bonus++) {
    for (let penalty = 0; penalty < penaltyDist.length; penalty++) {
      hitChance +=
        bonusDist[bonus] *
        penaltyDist[penalty] *
        toHit(toHitMods + bonus - penalty, targetAC, critThreshold, advantage);
    }
  }

  return hitChance;
};
