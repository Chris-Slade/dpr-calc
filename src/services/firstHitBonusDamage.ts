import { Dice } from 'types';
import sumOfDice from './sumOfDice';

export default (
  atLeastOneHit: number,
  firstHitCrits: number,
  damageDice: Partial<Dice>,
  damageMods: number,
) => {
  const diceDamage = sumOfDice(damageDice);
  const damage = atLeastOneHit * (damageMods + diceDamage);
  const critDamage = firstHitCrits * diceDamage;

  return damage + critDamage;
};
