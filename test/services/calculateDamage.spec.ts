import { expect } from 'chai';
import { calculateDamage } from 'services';
import { EPSILON } from 'test/helpers/epsilon';
import { AdditionalModValues, Dice } from 'types';

const DEFAULT_ADDITIONAL_MODS: Readonly<AdditionalModValues> = {
  archeryFightingStyle: false,
  duelingFightingStyle: false,
  plusOneWeapon: false,
  plusThreeWeapon: false,
  plusTwoWeapon: false,
  powerAttack: false,
  rage: false,
};

const DEFAULT_DICE: Readonly<Dice> = {
  d4: 0,
  d6: 0,
  d8: 0,
  d10: 0,
  d12: 0,
  d20: 0,
};

describe('full damage calculation', () => {
  it('9th-level sneak attacking CBE rogue attacking twice', () => {
    expect(
      calculateDamage({
        targetAC: 16,
        level: 9,
        attacks: 2,
        baseAttackMods: 5 + 4,
        baseDamageMods: 5,
        advantage: 'normal',
        bonusDice: DEFAULT_DICE,
        penaltyDice: DEFAULT_DICE,
        critThreshold: 20,
        additionalMods: DEFAULT_ADDITIONAL_MODS,
        damageDice: { ...DEFAULT_DICE, d6: 1 },
        firstHitBonus: 0,
        firstHitBonusDice: { d6: 5 },
      })
    ).to.be.approximately(29.3125, EPSILON);
  });

  it('11th-level champion fighter with Archery, CBE, and SS attacking 4 times with a +1 weapon', () => {
    expect(
      calculateDamage({
        targetAC: 16,
        attacks: 4,
        level: 11,
        baseAttackMods: 5 + 4,
        baseDamageMods: 5,
        advantage: 'normal',
        bonusDice: DEFAULT_DICE,
        penaltyDice: DEFAULT_DICE,
        critThreshold: 19,
        additionalMods: {
          ...DEFAULT_ADDITIONAL_MODS,
          archeryFightingStyle: true,
          plusOneWeapon: true,
          powerAttack: true,
        },
        damageDice: { ...DEFAULT_DICE, d6: 1 },
        firstHitBonus: 0,
        firstHitBonusDice: DEFAULT_DICE,
      })
    ).to.be.approximately(48.2, EPSILON);
  });

  it('5th-level raging barbarian attacking recklessly with GWM and a greataxe', () => {
    expect(
      calculateDamage({
        targetAC: 14,
        attacks: 2,
        level: 5,
        baseAttackMods: 4 + 3,
        baseDamageMods: 4,
        advantage: 'advantage',
        bonusDice: DEFAULT_DICE,
        penaltyDice: DEFAULT_DICE,
        critThreshold: 20,
        additionalMods: {
          ...DEFAULT_ADDITIONAL_MODS,
          powerAttack: true,
          rage: true,
        },
        damageDice: { ...DEFAULT_DICE, d12: 1 },
        firstHitBonus: 0,
        firstHitBonusDice: DEFAULT_DICE,
      })
    ).to.be.approximately(32.655, EPSILON);
  });

  it('15th-level paladin, blessed, IDS with a +3 greatsword', () => {
    expect(
      calculateDamage({
        targetAC: 18,
        attacks: 2,
        level: 15,
        baseAttackMods: 5 + 5,
        baseDamageMods: 5,
        advantage: 'normal',
        bonusDice: { ...DEFAULT_DICE, d4: 1 },
        penaltyDice: DEFAULT_DICE,
        critThreshold: 20,
        additionalMods: {
          ...DEFAULT_ADDITIONAL_MODS,
          plusThreeWeapon: true,
        },
        damageDice: { ...DEFAULT_DICE, d6: 2, d8: 1 },
        firstHitBonus: 0,
        firstHitBonusDice: DEFAULT_DICE,
      })
    ).to.be.approximately(36.7375, EPSILON);
  });
});
