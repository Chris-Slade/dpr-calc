import { expect } from 'chai';
import { describe } from 'mocha';
import { damagePerAttack } from 'services';
import { EPSILON } from '../helpers/epsilon';

describe('damage per attack', () => {
  it('65% chance to hit, 5% chance to crit, 2d6 + 5 should be 8.15', () => {
    const dpa = damagePerAttack(0.65, 0.05, { d6: 2 }, 5);
    expect(dpa).to.be.approximately(8.15, EPSILON);
  });

  it('50% chance to hit, 10% chance to crit, 1d10 + 1d6 + 3 should be 6.9', () => {
    const dpa = damagePerAttack(0.5, 0.1, { d10: 1, d6: 1 }, 3);
    expect(dpa).to.be.approximately(6.9, EPSILON);
  });

  it('70% chance to hit, 5% chance to crit, 1d12 + 5 with Brutal Critical should be 8.7', () => {
    const dpa = damagePerAttack(0.7, 0.05, { d12: 1 }, 5, { d12: 1 }, 0);
    expect(dpa).to.be.approximately(8.7, EPSILON);
  });

  it('50% chance to hit, 5% chance to crit, 2d6 + 5 with a vicious weapon should be 6.7', () => {
    const dpa = damagePerAttack(0.5, 0.05, { d6: 2 }, 5, {}, 7);
    expect(dpa).to.be.approximately(6.7, EPSILON);
  });
});
