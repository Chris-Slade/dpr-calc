import { Dice } from 'types';
import sumOfDice from './sumOfDice';

export default (
  attacks: number,
  chanceToHit: number,
  chanceToCrit: number,
  damageDice: Partial<Dice>,
  damageMods: number
) => {
  const diceDamage = sumOfDice(damageDice);
  // P(at least 1 hit) = 1 - P(all misses) = 1 - P(miss)^attacks
  const atLeastOneHit = 1 - (1 - chanceToHit) ** attacks;
  const damage = atLeastOneHit * (damageMods + diceDamage);

  // Chance that first hit is a crit is a geometric sum
  //   = c * Sum_(k=0)^(n-1) m^k
  //   = c (1 - m^n) / (1 - m)
  // where m = probability of missing, c = probability of critting, n = number
  // of attacks.
  const chanceToMiss = 1 - chanceToHit;
  const chanceOfCrittingFirst =
    chanceToCrit * ((1 - chanceToMiss ** attacks) / (1 - chanceToMiss));
  const critDamage = chanceOfCrittingFirst * diceDamage;

  return damage + critDamage;
};
