import {
  cantripAttacks,
  chanceToCrit,
  chanceToHit,
  damagePerAttack,
  profBonus,
} from 'services';
import { Advantage, Baseline } from 'types';

/*
 * The DPR baseline is a warlock who starts with 16 CHA, increases it to 18 at
 * 4th level and 20 at 8th level, and uses Eldritch Blast with Agonizing Blast
 * and Hex.
 */

const charismaPerLevel = (level: number) => (level < 4 ? 3 : level < 8 ? 4 : 5);

const agonizingBlastDamage = (level: number) =>
  level < 2 ? 0 : charismaPerLevel(level);

const warlockBaseline = (
  level: number,
  targetAC: number,
  advantage: Advantage,
) => {
  const accuracy = chanceToHit(
    charismaPerLevel(level) + profBonus(level),
    targetAC,
    20,
    advantage,
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
      agonizingBlastDamage(level),
    );

  return {
    accuracy,
    damage,
  };
};

const fighterAttacks = (level: number) =>
  level >= 20 ? 4 : level >= 11 ? 3 : level >= 5 ? 2 : 1;

const fighterBaseline = (
  level: number,
  targetAC: number,
  advantage: Advantage,
) => {
  const dex = level >= 8 ? 5 : level >= 6 ? 4 : 3;
  const pb = profBonus(level);
  const sharpshooterPenalty = level >= 4 ? -5 : 0;
  const sharpshooterDamage = level >= 4 ? 10 : 0;

  const toHit = dex + pb + sharpshooterPenalty + 2; // +2 for Archery
  const attacks = fighterAttacks(level) + 1; // +1 for BA attack;

  const accuracy = chanceToHit(toHit, targetAC, 20, advantage);
  const damage =
    attacks *
    damagePerAttack(
      accuracy,
      chanceToCrit(20, advantage),
      { d6: 1 },
      dex + sharpshooterDamage,
    );

  return { accuracy, damage };
};

const rogueBaseline = (
  level: number,
  targetAC: number,
  advantage: Advantage,
) => {
  const dex = level >= 8 ? 5 : level >= 4 ? 4 : 3;
  const pb = profBonus(level);
  const sneakAttackDice = Math.ceil(level / 2);

  const accuracy = chanceToHit(dex + pb, targetAC, 20, advantage);
  const damage = damagePerAttack(
    accuracy,
    chanceToCrit(20, advantage),
    { d8: 1, d6: sneakAttackDice },
    dex,
  );

  return { accuracy, damage };
};

export default (
  type: Baseline,
  level: number,
  targetAC: number,
  advantage: Advantage,
) => {
  switch (type) {
    case 'warlock':
      return warlockBaseline(level, targetAC, advantage);
    case 'fighter':
      return fighterBaseline(level, targetAC, advantage);
    case 'rogue':
      return rogueBaseline(level, targetAC, advantage);

    default:
      throw new TypeError(`Not a baseline type: ${type}`);
  }
};
