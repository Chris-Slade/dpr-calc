import { expect } from 'chai';
import { firstHitBonusDamage } from 'services';
import { EPSILON } from 'test/helpers/epsilon';

describe('first hit bonus damage', () => {
  it('should be 17.0625 with 2 attacks, 70% accuracy, 5d6 bonus dice, 0 bonus damage', () => {
    expect(firstHitBonusDamage(2, 0.7, 0.05, { d6: 5 }, 0)).to.be.approximately(
      17.0625,
      EPSILON,
    );
  });

  it('should be 4.55 with 2 attacks, 70% accuracy, 0 bonus dice, 5 bonus damage', () => {
    expect(firstHitBonusDamage(2, 0.7, 0.05, {}, 5)).to.be.approximately(
      4.55,
      EPSILON,
    );
  });

  it('should be 23.10875 with 3 attacks, 70% accuracy, 5d6 bonus dice, 5 bonus damage', () => {
    expect(firstHitBonusDamage(3, 0.7, 0.05, { d6: 5 }, 5)).to.be.approximately(
      23.10875,
      EPSILON,
    );
  });
});
