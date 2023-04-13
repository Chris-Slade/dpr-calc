import { expect } from 'chai';
import { sidesOfDie } from 'services';
import { Die } from 'types';

describe('sides of die', () => {
  it('counts the correct number of sides', () => {
    expect(sidesOfDie('d4')).to.equal(4);
    expect(sidesOfDie('d6')).to.equal(6);
    expect(sidesOfDie('d8')).to.equal(8);
    expect(sidesOfDie('d10')).to.equal(10);
    expect(sidesOfDie('d12')).to.equal(12);

    expect(() => sidesOfDie('invalid' as Die)).to.throw();
  });
});
