import { Dice } from 'types';
import sumOfDice from './sumOfDice';

export default (
  chanceToHit: number,
  chanceToCrit: number,
  damageDice: Partial<Dice>,
  damageMods: number,
  critBonusDice: Partial<Dice> = {},
  critBonus: number = 0
) => {
  const diceDamage = sumOfDice(damageDice);
  const critBonusDiceDamage = sumOfDice(critBonusDice);

  return (
    chanceToHit * (diceDamage + damageMods) +
    chanceToCrit * (diceDamage + critBonus + critBonusDiceDamage)
  );
};
