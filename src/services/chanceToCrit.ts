import { Advantage } from 'types';

export default (critOn: number, advantage: Advantage) => {
  const chanceOfCrit = (21 - critOn) / 20;
  const chanceOfNoCrit = 1 - chanceOfCrit;
  return advantage === 'normal'
    ? chanceOfCrit
    : advantage === 'advantage'
    ? 1 - chanceOfNoCrit ** 2
    : advantage === 'super_advantage'
    ? 1 - chanceOfNoCrit ** 3
    : chanceOfCrit ** 2;
};
