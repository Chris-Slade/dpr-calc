import { expect } from 'chai';
import { describe } from 'mocha';
// TODO Get this import to work
import calculateBaseline from 'services/calculateBaseline';

// EB+Hex Warlock level 1 (+3 CHA) EB with Hex	6.30
// EB+Hex Warlock level 2 (+3 CHA) + Agonizing	8.25
// EB+Hex Warlock level 4 (+4 CHA) + ASI	8.90
// EB+Hex Warlock level 5 (+4 CHA) + 2 rays	17.80
// EB+Hex Warlock level 8 (+5 CHA) + ASI	19.10
// EB+Hex Warlock level 11 (+5 CHA) + 3 rays	28.65
// EB+Hex Warlock level 17 (+5 CHA) + 4 rays	38.20

describe('warlock damage baseline', () => {
  describe('level 1', () => {
    it('should be 6.3 DPR', () => {
      expect(calculateBaseline(1, 13, 'normal')).to.equal(6.3);
    });
  });
});
