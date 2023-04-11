import { expect } from 'chai';
import { describe } from 'mocha';
import { sumOfDice } from 'services';

describe('sum of dice', () => {
  it('should handle multiples of the same die', () => {
    expect(sumOfDice({ d6: 8 })).to.equal(28);
  });

  it('should handle different dice', () => {
    expect(sumOfDice({ d4: 1, d6: 1, d8: 1, d10: 1, d12: 1, d20: 1 })).to.equal(
      33,
    );
  });

  it('should handle a mix of both', () => {
    expect(sumOfDice({ d4: 1, d6: 2, d8: 3, d10: 4, d12: 5, d20: 6 })).to.equal(
      140.5,
    );
  });

  it('should handle no dice', () => {
    expect(sumOfDice({})).to.equal(0);
  });

  it('should handle undefined dice', () => {
    expect(
      sumOfDice({
        d4: 2,
        d6: undefined,
        d8: 2,
      }),
    ).to.equal(14);
  });
});
