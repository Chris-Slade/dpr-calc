import { AdditionalModValues } from 'types';

export default (
  additionalMods: AdditionalModValues,
  attackMods: number,
  damageMods: number
): [number, number] => {
  if (additionalMods.archeryFightingStyle) {
    attackMods += 2;
  }
  if (additionalMods.duelingFightingStyle) {
    damageMods += 2;
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

  return [attackMods, damageMods];
};
