import { expect } from 'chai';
import { chanceOfAtLeastOneHit, firstHitBonusDamage } from 'services';
import { EPSILON } from 'test/helpers';

describe('first hit bonus damage', () => {
  it('should be 17.0625 with 2 attacks, 70% accuracy, 5d6 bonus dice, 0 bonus damage', () => {
    const { atLeastOneHit, firstHitCrits } = chanceOfAtLeastOneHit(
      2,
      0.7,
      0.05,
    );
    const damage = firstHitBonusDamage(
      atLeastOneHit,
      firstHitCrits,
      { d6: 5 },
      0,
    );
    expect(damage).to.be.approximately(17.0625, EPSILON);
  });

  it('should be 4.55 with 2 attacks, 70% accuracy, 0 bonus dice, 5 bonus damage', () => {
    const { atLeastOneHit, firstHitCrits } = chanceOfAtLeastOneHit(
      2,
      0.7,
      0.05,
    );
    const damage = firstHitBonusDamage(atLeastOneHit, firstHitCrits, {}, 5);
    expect(damage).to.be.approximately(4.55, EPSILON);
  });

  it('should be 23.10875 with 3 attacks, 70% accuracy, 5d6 bonus dice, 5 bonus damage', () => {
    const { atLeastOneHit, firstHitCrits } = chanceOfAtLeastOneHit(
      3,
      0.7,
      0.05,
    );
    const damage = firstHitBonusDamage(
      atLeastOneHit,
      firstHitCrits,
      { d6: 5 },
      5,
    );
    expect(damage).to.be.approximately(23.10875, EPSILON);
  });
});
