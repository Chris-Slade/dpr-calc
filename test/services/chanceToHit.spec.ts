import { expect } from 'chai';
import { chanceToHit } from 'services';
import { EPSILON } from '../helpers/epsilon';

describe('chance to hit', () => {
  describe('normal within bounds', () => {
    it('should be 55%', () => {
      expect(chanceToHit(5, 15, 20, 'normal')).to.be.approximately(
        0.55,
        EPSILON
      );
    });
  });

  describe('advantage within bounds', () => {
    it('should be 79.75%', () => {
      expect(chanceToHit(5, 15, 20, 'advantage')).to.be.approximately(
        0.7975,
        EPSILON
      );
    });
  });

  describe('disadvantage within bounds', () => {
    it('should be 30.25%', () => {
      expect(chanceToHit(5, 15, 20, 'disadvantage')).to.be.approximately(
        0.3025,
        EPSILON
      );
    });
  });

  describe('normal out of bounds (enemy AC), crit on 20', () => {
    it('should be 0.05', () => {
      expect(chanceToHit(1, 50, 20, 'normal')).to.be.approximately(
        0.05,
        EPSILON
      );
    });
  });

  describe('normal out of bounds (to hit), crit on 20', () => {
    it('should be 0.95', () => {
      expect(chanceToHit(50, 1, 20, 'normal')).to.be.approximately(
        0.95,
        EPSILON
      );
    });
  });

  describe('normal out of bounds (enemy AC), crit on 19', () => {
    it('should be 0.1', () => {
      expect(chanceToHit(1, 50, 19, 'normal')).to.be.approximately(
        0.1,
        EPSILON
      );
    });
  });

  describe('advantage out of bounds (enemy AC), crit on 20', () => {
    it('should be 0.0975', () => {
      expect(chanceToHit(0, 50, 20, 'advantage')).to.be.approximately(
        0.0975,
        EPSILON
      );
    });
  });

  describe('disadvantage out of bounds (enemy AC), crit on 20', () => {
    it('should be 0.0025', () => {
      expect(chanceToHit(0, 50, 20, 'disadvantage')).to.be.approximately(
        0.0025,
        EPSILON
      );
    });
  });

  describe('advantage out of bounds (to hit), crit on 20', () => {
    it('should be 0.9975', () => {
      expect(chanceToHit(50, 0, 20, 'advantage')).to.be.approximately(
        0.9975,
        EPSILON
      );
    });
  });

  describe('disadvantage out of bounds (to hit), crit on 20', () => {
    it('should be 1 - 0.0975', () => {
      expect(chanceToHit(50, 0, 20, 'disadvantage')).to.be.approximately(
        1 - 0.0975,
        EPSILON
      );
    });
  });

  describe('advantage out of bounds (enemy AC), crit on 19', () => {
    it('should be 0.19', () => {
      expect(chanceToHit(0, 50, 19, 'advantage')).to.be.approximately(
        0.19,
        EPSILON
      );
    });
  });

  describe('disadvantage out of bounds (enemy AC), crit on 19', () => {
    it('should be 0.01', () => {
      expect(chanceToHit(0, 50, 19, 'disadvantage')).to.be.approximately(
        0.01,
        EPSILON
      );
    });
  });
});
