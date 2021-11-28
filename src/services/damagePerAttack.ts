import DamageDice from 'types/DamageDice';
import Die from 'types/Die';
import dieAverage from './dieAverage';

export default (
  chanceToHit: number,
  chanceToCrit: number,
  damageDice: DamageDice,
  damageMods: number
) => {
  const diceDamage = (Object.keys(damageDice) as Die[]).reduce(
    (acc, cur) => acc + dieAverage(cur) * damageDice[cur],
    0
  );

  return chanceToHit * (diceDamage + damageMods) + chanceToCrit * diceDamage;
};
