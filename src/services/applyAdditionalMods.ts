import { AdditionalModValues } from 'types';

const rageDamageByLevel = (level: number) =>
  level < 9 ? 2 : level < 16 ? 3 : 4;

export default (
  additionalMods: AdditionalModValues,
  attackMods: number,
  damageMods: number,
  level: number
): [number, number] => {
  if (additionalMods.archeryFightingStyle) {
    attackMods += 2;
  }
  if (additionalMods.duelingFightingStyle) {
    damageMods += 2;
  }
  if (additionalMods.bless) {
    attackMods += 2.5;
  }
  if (additionalMods.plusOneWeapon) {
    attackMods += 1;
    damageMods += 1;
  }
  if (additionalMods.plusTwoWeapon) {
    attackMods += 2;
    damageMods += 2;
  }
  if (additionalMods.plusThreeWeapon) {
    attackMods += 3;
    damageMods += 3;
  }
  if (additionalMods.powerAttack) {
    attackMods -= 5;
    damageMods += 10;
  }
  if (additionalMods.rage) {
    damageMods += rageDamageByLevel(level);
  }

  return [attackMods, damageMods];
};
