import { expect } from 'chai';
import { chanceOfAtLeastOneHit } from 'services';
import { EPSILON } from 'test/helpers';

describe('chance of at least one hit', () => {
  it('3 attacks at 65% accuracy', () => {
    const { atLeastOneHit } = chanceOfAtLeastOneHit(3, 0.65, 0.05);
    expect(atLeastOneHit).to.be.approximately(0.957125, EPSILON);
  });

  it('3 attacks at 65% accuracy, 0.05 crit rate, first hit crits', () => {
    const { firstHitCrits } = chanceOfAtLeastOneHit(3, 0.65, 0.05);
    expect(firstHitCrits).to.be.approximately(0.073625, EPSILON);
  });
});
