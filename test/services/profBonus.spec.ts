import { expect } from 'chai';
import { describe } from 'mocha';
import profBonus from 'services/profBonus';

describe('profBonus', () => {
  describe('CR 0', () => {
    it('should be 2', () => {
      expect(profBonus(0)).to.equal(2);
    });
  });

  describe('Level 1', () => {
    it('should be 2', () => {
      expect(profBonus(1)).to.equal(2);
    });
  });

  describe('Level 4', () => {
    it('should be 2 still', () => {
      expect(profBonus(4)).to.equal(2);
    });
  });

  describe('Level 5', () => {
    it('should be 3', () => {
      expect(profBonus(5)).to.equal(3);
    });
  });
});
