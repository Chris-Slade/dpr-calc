import { expect } from 'chai';
import { describe } from 'mocha';
// TODO Get this import to work
import calculateBaseline from '../../src/services/calculateBaseline';
import { EPSILON } from '../helpers/epsilon';

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
      expect(calculateBaseline(1, 13, 'normal').damage).to.be.approximately(
        6.3,
        EPSILON
      );
    });
  });
  describe('level 2', () => {
    it('should be 8.25 DPR', () => {
      expect(calculateBaseline(2, 13, 'normal').damage).to.be.approximately(
        8.25,
        EPSILON
      );
    });
  });
  describe('level 4', () => {
    it('should be 8.25 DPR', () => {
      expect(calculateBaseline(4, 14, 'normal').damage).to.be.approximately(
        8.9,
        EPSILON
      );
    });
  });
  describe('level 5', () => {
    it('should be 17.8 DPR', () => {
      expect(calculateBaseline(5, 15, 'normal').damage).to.be.approximately(
        17.8,
        EPSILON
      );
    });
  });
  describe('level 8', () => {
    it('should be 19.1 DPR', () => {
      expect(calculateBaseline(8, 16, 'normal').damage).to.be.approximately(
        19.1,
        EPSILON
      );
    });
  });
  describe('level 11', () => {
    it('should be 28.65 DPR', () => {
      expect(calculateBaseline(11, 17, 'normal').damage).to.be.approximately(
        28.65,
        EPSILON
      );
    });
  });
  describe('level 17', () => {
    it('should be 38.2 DPR', () => {
      expect(calculateBaseline(17, 19, 'normal').damage).to.be.approximately(
        38.2,
        EPSILON
      );
    });
  });
});
