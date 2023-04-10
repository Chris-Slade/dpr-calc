import { Dice, Die } from 'types';
import dieAverage from './dieAverage';

export default (dice: Partial<Dice>) =>
  (Object.keys(dice) as Die[]).reduce(
    (acc, cur) => acc + dieAverage(cur) * (dice?.[cur] ?? 0),
    0
  );
