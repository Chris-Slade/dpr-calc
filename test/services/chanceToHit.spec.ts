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

  describe('elven accuracy hit', () => {
    it('should be 95.7125%', () => {
      expect(chanceToHit(7, 15, 20, 'super_advantage')).to.be.approximately(
        0.957125,
        EPSILON
      );
    });
  });

  describe('elven accuracy crit', () => {
    it('should be 14.2625%', () => {
      expect(chanceToHit(0, 50, 20, 'super_advantage')).to.be.approximately(
        0.142625,
        EPSILON
      );
    });
  });

  describe('elven accuracy crit on 19', () => {
    it('should be 27.1%', () => {
      expect(chanceToHit(0, 50, 19, 'super_advantage')).to.be.approximately(
        0.271,
        EPSILON
      );
    });
  });

  describe('normal, bless, crit on 20', () => {
    it('should be 0.675', () => {
      expect(chanceToHit(5, 15, 20, 'normal', { d4: 1 })).to.be.approximately(
        0.675,
        EPSILON
      );
    });
  });

  describe('normal, bane, crit on 20', () => {
    it('should be 0.425', () => {
      expect(
        chanceToHit(5, 15, 20, 'normal', undefined, { d4: 1 })
      ).to.be.approximately(0.425, EPSILON);
    });
  });

  describe('normal out of bounds (enemy AC), bless, crit on 20', () => {
    it('should be 0.0875', () => {
      expect(chanceToHit(3, 25, 20, 'normal', { d4: 1 })).to.be.approximately(
        0.0875,
        EPSILON
      );
    });
  });

  describe('normal out of bounds (to hit), bless, crit on 20', () => {
    it('should be 0.95', () => {
      expect(chanceToHit(8, 10, 20, 'normal', { d4: 1 })).to.be.approximately(
        0.95,
        EPSILON
      );
    });
  });

  describe('bonus dice stress test', () => {
    it('should be 0.949311382904', () => {
      expect(
        chanceToHit(5, 69, 20, 'normal', {
          d4: 6,
          d6: 5,
          d8: 4,
          d10: 3,
          d12: 2,
          d20: 1,
        })
      ).to.be.approximately(0.949311382904, EPSILON);
    });
  });

  describe('penalty dice stress test', () => {
    it('should be 0.514313755234', () => {
      expect(
        chanceToHit(100, 20, 20, 'normal', undefined, {
          d4: 6,
          d6: 5,
          d8: 4,
          d10: 3,
          d12: 2,
          d20: 1,
        })
      ).to.be.approximately(0.514313755234, EPSILON);
    });
  });

  describe('full stress test', () => {
    it('should be 0.891196525057', () => {
      expect(
        chanceToHit(
          11,
          50,
          19,
          'advantage',
          {
            d4: 1,
            d6: 2,
            d8: 3,
            d10: 4,
            d12: 5,
            d20: 6,
          },
          {
            d4: 6,
            d6: 5,
            d8: 4,
            d10: 3,
            d12: 2,
            d20: 1,
          }
        )
      ).to.be.approximately(0.891196525057, EPSILON);
    });
  });

  describe('bonus and penalty dice', () => {
    it('should be 0.4', () => {
      expect(
        chanceToHit(6, 18, 19, 'normal', { d4: 1 }, { d6: 1 })
      ).to.be.approximately(0.4, EPSILON);
    });
  });
});
