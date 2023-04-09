import { Die } from 'types';

export default (die: Die) => {
  switch (die) {
    case 'd4':
      return 4;
    case 'd6':
      return 6;
    case 'd8':
      return 8;
    case 'd10':
      return 10;
    case 'd12':
      return 12;
    case 'd20':
      return 20;

    default:
      throw new TypeError(`Not a die: ${die}`);
  }
};
