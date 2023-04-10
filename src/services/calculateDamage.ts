import {
  applyAdditionalMods,
  chanceToCrit,
  chanceToHit,
  damagePerAttack,
  firstHitBonusDamage,
} from 'services';
import { AdditionalModValues, Advantage, Dice } from 'types';

interface Args {
  additionalMods: AdditionalModValues;
  advantage: Advantage;
  attacks: number;
  baseAttackMods: number;
  baseDamageMods: number;
  bonusDice: Partial<Dice>;
  critThreshold: number;
  damageDice: Partial<Dice>;
  firstHitBonus: number;
  firstHitBonusDice: Partial<Dice>;
  level: number;
  penaltyDice: Partial<Dice>;
  targetAC: number;
}

export default ({
  additionalMods,
  advantage,
  attacks,
  baseAttackMods,
  baseDamageMods,
  bonusDice,
  critThreshold,
  damageDice,
  firstHitBonus,
  firstHitBonusDice,
  level,
  penaltyDice,
  targetAC,
}: Args) => {
  const [attackMods, damageMods] = applyAdditionalMods(
    additionalMods,
    baseAttackMods,
    baseDamageMods,
    level
  );
  const critChance = chanceToCrit(critThreshold, advantage);
  const hitChance = chanceToHit(
    attackMods,
    targetAC,
    critThreshold,
    advantage,
    bonusDice,
    penaltyDice
  );

  return (
    attacks * damagePerAttack(hitChance, critChance, damageDice, damageMods) +
    firstHitBonusDamage(
      attacks,
      hitChance,
      chanceToCrit(critThreshold, advantage),
      firstHitBonusDice,
      firstHitBonus
    )
  );
};
