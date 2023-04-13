import { expect } from 'chai';
import { applyAdditionalMods } from 'services';
import { AdditionalModValues } from 'types';

const createMods = (fieldName: keyof AdditionalModValues) => ({
  archeryFightingStyle: false,
  duelingFightingStyle: false,
  plusOneWeapon: false,
  plusThreeWeapon: false,
  plusTwoWeapon: false,
  powerAttack: false,
  proficient: false,
  rage: false,
  [fieldName]: true,
});

describe('Additional mods', () => {
  describe('Archery', () => {
    it('Should add 2 to hit', () => {
      expect(
        applyAdditionalMods(createMods('archeryFightingStyle'), 0, 0, 1),
      ).to.have.members([2, 0]);
    });
  });
  describe('Dueling', () => {
    it('Should add 2 damage', () => {
      expect(
        applyAdditionalMods(createMods('duelingFightingStyle'), 0, 0, 1),
      ).to.have.members([0, 2]);
    });
  });
  describe('Power Attack', () => {
    it('Should add -5 to hit, +10 to damage', () => {
      expect(
        applyAdditionalMods(createMods('powerAttack'), 7, 3, 1),
      ).to.have.members([2, 13]);
    });
  });
  describe('Rage', () => {
    [1, 8].forEach(level => {
      it(`Should add 2 at level ${level}`, () => {
        expect(
          applyAdditionalMods(createMods('rage'), 0, 0, level),
        ).to.have.members([0, 2]);
      });
    });
    [9, 15].forEach(level => {
      it(`Should add 3 at level ${level}`, () => {
        expect(
          applyAdditionalMods(createMods('rage'), 0, 0, level),
        ).to.have.members([0, 3]);
      });
    });
    [16, 20].forEach(level => {
      it(`Should add 4 at level ${level}`, () => {
        expect(
          applyAdditionalMods(createMods('rage'), 0, 0, level),
        ).to.have.members([0, 4]);
      });
    });
  });
  describe('Magic Weapons', () => {
    describe('+1/+1', () => {
      it('Should add +1/+1', () => {
        expect(
          applyAdditionalMods(createMods('plusOneWeapon'), 0, 0, 1),
        ).to.have.members([1, 1]);
      });
    });
    describe('+2/+2', () => {
      it('Should add +2/+2', () => {
        expect(
          applyAdditionalMods(createMods('plusTwoWeapon'), 0, 0, 1),
        ).to.have.members([2, 2]);
      });
    });
    describe('+3/+3', () => {
      it('Should add +3/+3', () => {
        expect(
          applyAdditionalMods(createMods('plusThreeWeapon'), 0, 0, 1),
        ).to.have.members([3, 3]);
      });
    });
  });
});
