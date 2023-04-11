import { expect } from 'chai';
import { applyAdditionalMods, calculateDamage } from 'services';
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
    const [attackMods, damageMods] = applyAdditionalMods(
      DEFAULT_ADDITIONAL_MODS,
      5 + 4,
      5,
      9,
    );
    expect(
      calculateDamage({
        targetAC: 16,
        attacks: 2,
        attackMods,
        advantage: 'normal',
        bonusDice: DEFAULT_DICE,
        penaltyDice: DEFAULT_DICE,
        critThreshold: 20,
        damageMods,
        damageDice: { ...DEFAULT_DICE, d6: 1 },
        firstHitBonus: 0,
        firstHitBonusDice: { d6: 5 },
        critBonus: 0,
        critBonusDice: DEFAULT_DICE,
      }).damage,
    ).to.be.approximately(29.3125, EPSILON);
  });

  it('11th-level champion fighter with Archery, CBE, and SS attacking 4 times with a +1 weapon', () => {
    const [attackMods, damageMods] = applyAdditionalMods(
      {
        ...DEFAULT_ADDITIONAL_MODS,
        archeryFightingStyle: true,
        plusOneWeapon: true,
        powerAttack: true,
      },
      5 + 4,
      5,
      11,
    );
    expect(
      calculateDamage({
        targetAC: 16,
        attacks: 4,
        attackMods,
        advantage: 'normal',
        bonusDice: DEFAULT_DICE,
        penaltyDice: DEFAULT_DICE,
        critThreshold: 19,
        damageMods,
        damageDice: { ...DEFAULT_DICE, d6: 1 },
        firstHitBonus: 0,
        firstHitBonusDice: DEFAULT_DICE,
        critBonus: 0,
        critBonusDice: DEFAULT_DICE,
      }).damage,
    ).to.be.approximately(48.2, EPSILON);
  });

  it('9th-level raging half-orc barbarian attacking recklessly with GWM and a vicious greataxe', () => {
    const [attackMods, damageMods] = applyAdditionalMods(
      {
        ...DEFAULT_ADDITIONAL_MODS,
        powerAttack: true,
        rage: true,
      },
      5 + 4,
      5,
      9,
    );
    expect(
      calculateDamage({
        targetAC: 16,
        attacks: 2,
        attackMods,
        advantage: 'advantage',
        bonusDice: DEFAULT_DICE,
        penaltyDice: DEFAULT_DICE,
        critThreshold: 20,
        damageMods,
        damageDice: { ...DEFAULT_DICE, d12: 1 },
        firstHitBonus: 0,
        firstHitBonusDice: DEFAULT_DICE,
        critBonus: 7,
        critBonusDice: { ...DEFAULT_DICE, d12: 2 },
      }).damage,
    ).to.be.approximately(39.345, EPSILON);
  });

  it('15th-level paladin, blessed, IDS with a +3 greatsword', () => {
    const [attackMods, damageMods] = applyAdditionalMods(
      {
        ...DEFAULT_ADDITIONAL_MODS,
        plusThreeWeapon: true,
      },
      5 + 5,
      5,
      15,
    );
    expect(
      calculateDamage({
        advantage: 'normal',
        attackMods,
        attacks: 2,
        bonusDice: { ...DEFAULT_DICE, d4: 1 },
        critBonus: 0,
        critBonusDice: DEFAULT_DICE,
        critThreshold: 20,
        damageDice: { ...DEFAULT_DICE, d6: 2, d8: 1 },
        damageMods,
        firstHitBonus: 0,
        firstHitBonusDice: DEFAULT_DICE,
        penaltyDice: DEFAULT_DICE,
        targetAC: 18,
      }).damage,
    ).to.be.approximately(36.7375, EPSILON);
  });
});
