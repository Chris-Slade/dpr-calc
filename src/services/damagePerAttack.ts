import Dice from 'types/Dice';
import sumOfDice from './sumOfDice';

export default (
  chanceToHit: number,
  chanceToCrit: number,
  damageDice: Partial<Dice>,
  damageMods: number
) => {
  const diceDamage = sumOfDice(damageDice);

  return chanceToHit * (diceDamage + damageMods) + chanceToCrit * diceDamage;
};
