import { expect } from 'chai';
import averageMonsterAC from '../../src/services/averageMonsterAC';

describe('Average monster AC', () => {
  describe('CR 0 and 1/8 (special case)', () => {
    it('should be 12', () => {
      expect(averageMonsterAC(0)).to.equal(12);
      expect(averageMonsterAC(1 / 8)).to.equal(12);
    });
  });

  describe('Other CRs', () => {
    it('should be 13 + CR/3', () => {
      expect(averageMonsterAC(0)).to.equal(12);
      expect(averageMonsterAC(1 / 8)).to.equal(12);
      expect(averageMonsterAC(1 / 4)).to.equal(13);
      expect(averageMonsterAC(1 / 2)).to.equal(13);
      expect(averageMonsterAC(1)).to.equal(13);
      expect(averageMonsterAC(2)).to.equal(13);
      expect(averageMonsterAC(3)).to.equal(14);
      expect(averageMonsterAC(4)).to.equal(14);
      expect(averageMonsterAC(5)).to.equal(14);
      expect(averageMonsterAC(6)).to.equal(15);
      expect(averageMonsterAC(7)).to.equal(15);
      expect(averageMonsterAC(8)).to.equal(15);
      expect(averageMonsterAC(9)).to.equal(16);
      expect(averageMonsterAC(10)).to.equal(16);
      expect(averageMonsterAC(11)).to.equal(16);
      expect(averageMonsterAC(12)).to.equal(17);
      expect(averageMonsterAC(13)).to.equal(17);
      expect(averageMonsterAC(14)).to.equal(17);
      expect(averageMonsterAC(15)).to.equal(18);
      expect(averageMonsterAC(16)).to.equal(18);
      expect(averageMonsterAC(17)).to.equal(18);
      expect(averageMonsterAC(18)).to.equal(19);
      expect(averageMonsterAC(19)).to.equal(19);
      expect(averageMonsterAC(20)).to.equal(19);
      expect(averageMonsterAC(21)).to.equal(20);
      expect(averageMonsterAC(22)).to.equal(20);
      expect(averageMonsterAC(23)).to.equal(20);
      expect(averageMonsterAC(24)).to.equal(21);
      expect(averageMonsterAC(25)).to.equal(21);
      expect(averageMonsterAC(26)).to.equal(21);
    });
  });
});
