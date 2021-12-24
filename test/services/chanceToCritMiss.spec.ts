import { expect } from 'chai';
import { chanceToCritMiss } from 'services';

describe('chance to crit miss', () => {
  describe('normally', () => {
    it('should equal 0.05', () => {
      expect(chanceToCritMiss('normal')).to.equal(0.05);
    });
  });
  describe('with advantage', () => {
    it('should equal 0.0975', () => {
      expect(chanceToCritMiss('advantage')).to.equal(0.0975);
    });
  });

  describe('with disadvantage', () => {
    it('should equal 0.0025', () => {
      expect(chanceToCritMiss('disadvantage')).to.equal(0.0025);
    });
  });
});