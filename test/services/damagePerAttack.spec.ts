import { expect } from 'chai';
import { describe } from 'mocha';
import { damagePerAttack } from 'services';

describe('damage per attack', () => {
  describe('65% chance to hit, 5% chance to crit, 2d6 + 5', () => {
    it('should be 8.15', () => {
      expect(damagePerAttack(0.65, 0.05, { d6: 2 }, 5)).to.equal(8.15);
    });
  });

  describe('50% chance to hit, 10% chance to crit, 1d10 + 1d6 + 3', () => {
    it('should be 6.9', () => {
      expect(damagePerAttack(0.5, 0.1, { d10: 1, d6: 1 }, 3)).to.equal(6.9);
    });
  });
});
