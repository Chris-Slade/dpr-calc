import { expect } from 'chai';
import { clamp } from 'services';

describe('clamp', () => {
  it('clamps lower', () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it('clamps higher', () => {
    expect(clamp(10, -5, 5)).to.equal(5);
  });
});
