import {
  chanceToCrit,
  chanceToHit,
  damagePerAttack,
  firstHitBonusDamage,
} from 'services';
import { Advantage, Dice } from 'types';
import chanceOfAtLeastOneHit from './chanceOfAtLeastOneHit';

interface Args {
  advantage: Advantage;
  attackMods: number;
  attacks: number;
  bonusDice: Partial<Dice>;
  critBonus: number;
  critBonusDice: Partial<Dice>;
  critThreshold: number;
  damageDice: Partial<Dice>;
  damageMods: number;
  firstHitBonus: number;
  firstHitBonusDice: Partial<Dice>;
  penaltyDice: Partial<Dice>;
  targetAC: number;
}

export default ({
  advantage,
  attackMods,
  attacks,
  bonusDice,
  critBonus,
  critBonusDice,
  critThreshold,
  damageDice,
  damageMods,
  firstHitBonus,
  firstHitBonusDice,
  penaltyDice,
  targetAC,
}: Args) => {
  const hitChance = chanceToHit(
    attackMods,
    targetAC,
    critThreshold,
    advantage,
    bonusDice,
    penaltyDice,
  );

  const critChance = chanceToCrit(critThreshold, advantage);

  const { atLeastOneHit, atLeastOneCrit, firstHitCrits } =
    chanceOfAtLeastOneHit(attacks, hitChance, critChance);

  const dpa = damagePerAttack(
    hitChance,
    critChance,
    damageDice,
    damageMods,
    critBonusDice,
    critBonus,
  );

  const bonus = firstHitBonusDamage(
    atLeastOneHit,
    firstHitCrits,
    firstHitBonusDice,
    firstHitBonus,
  );

  const damage = attacks * dpa + bonus;

  return {
    accuracy: {
      hitChance,
      critChance,
      atLeastOneHit,
      atLeastOneCrit,
      firstHitCrits,
    },
    damage,
  };
};
