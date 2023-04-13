import { expect } from 'chai';
import { cantripAttacks, fighterAttacks } from 'services';

describe('attack progressions', () => {
  it('cantrip attacks', () => {
    const attacksByLevel = [
      1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
    ];
    for (let i = 0; i < 20; i++) {
      expect(cantripAttacks(i + 1)).to.equal(attacksByLevel[i]);
    }
  });

  it('fighter attacks', () => {
    const attacksByLevel = [
      1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
    ];
    for (let i = 0; i < 20; i++) {
      expect(fighterAttacks(i + 1)).to.equal(attacksByLevel[i]);
    }
  });
});
