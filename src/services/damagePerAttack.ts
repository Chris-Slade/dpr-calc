import Dice from 'types/Dice';
import Die from 'types/Die';
import dieAverage from './dieAverage';

export default (
  chanceToHit: number,
  chanceToCrit: number,
  damageDice: Partial<Dice>,
  damageMods: number
) => {
  const diceDamage = (Object.keys(damageDice) as Die[]).reduce(
    (acc, cur) => acc + dieAverage(cur) * (damageDice?.[cur] ?? 0),
    0
  );

  return chanceToHit * (diceDamage + damageMods) + chanceToCrit * diceDamage;
};
