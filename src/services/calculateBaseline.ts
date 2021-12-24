import { Advantage } from 'types';
import {
  cantripAttacks,
  chanceToCrit,
  chanceToHit,
  damagePerAttack,
  profBonus,
} from 'services';

/*
 * The DPR baseline is a warlock who starts with 16 CHA, increases it to 18 at
 * 4th level and 20 at 8th level, and uses Eldritch Blast with Agonizing Blast
 * and Hex.
 */

const charismaPerLevel = (level: number) => (level < 4 ? 3 : level < 8 ? 4 : 5);

const agonizingBlastDamage = (level: number) =>
  level < 2 ? 0 : charismaPerLevel(level);

export default (level: number, targetAC: number, advantage: Advantage) => {
  const accuracy = chanceToHit(
    charismaPerLevel(level) + profBonus(level),
    targetAC,
    20,
    advantage
  );
  const damage =
    cantripAttacks(level) *
    damagePerAttack(
      accuracy,
      chanceToCrit(20, advantage),
      {
        d4: 0,
        d6: 1,
        d8: 0,
        d10: 1,
        d12: 0,
        d20: 0,
      },
      agonizingBlastDamage(level)
    );

  return {
    accuracy,
    damage,
  };
};
