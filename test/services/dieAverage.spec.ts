import { expect } from 'chai';
import { describe } from 'mocha';
import { dieAverage } from 'services';

describe('die averages', () => {
  it('d4 should be 2.5', () => {
    expect(dieAverage('d4')).to.equal(2.5);
  });

  it('d6 should be 3.5', () => {
    expect(dieAverage('d6')).to.equal(3.5);
  });

  it('d8 should be 4.5', () => {
    expect(dieAverage('d8')).to.equal(4.5);
  });

  it('d10 should be 5.5', () => {
    expect(dieAverage('d10')).to.equal(5.5);
  });

  it('d12 should be 6.5', () => {
    expect(dieAverage('d12')).to.equal(6.5);
  });

  it('d20 should be 10.5', () => {
    expect(dieAverage('d20')).to.equal(10.5);
  });
});
