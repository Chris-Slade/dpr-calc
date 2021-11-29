import { expect } from 'chai';
import { describe } from 'mocha';
import chanceToCrit from '../../src/services/chanceToCrit';
import { EPSILON } from '../helpers/epsilon';

describe('chanceToCrit', () => {
  describe('crit on 20, normal', () => {
    it('should return 0.05', () => {
      expect(chanceToCrit(20, 'normal')).to.be.approximately(0.05, EPSILON);
    });
  });
  describe('crit on 20, advantage', () => {
    it('should return 0.0975', () => {
      expect(chanceToCrit(20, 'advantage')).to.be.approximately(
        0.0975,
        EPSILON
      );
    });
  });
  describe('crit on 20, disadvantage', () => {
    it('should return 0.0025', () => {
      expect(chanceToCrit(20, 'disadvantage')).to.be.approximately(
        0.0025,
        EPSILON
      );
    });
  });
  describe('crit on 19, normal', () => {
    it('should return 0.1', () => {
      expect(chanceToCrit(19, 'normal')).to.be.approximately(0.1, EPSILON);
    });
  });
  describe('crit on 19, advantage', () => {
    it('should return 0.19', () => {
      expect(chanceToCrit(19, 'advantage')).to.be.approximately(0.19, EPSILON);
    });
  });
  describe('crit on 19, disadvantage', () => {
    it('should return 0.01', () => {
      expect(chanceToCrit(19, 'disadvantage')).to.be.approximately(
        0.01,
        EPSILON
      );
    });
  });
});
