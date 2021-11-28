export default (level: number): number =>
  Math.max(2, 2 + Math.floor((level - 1) / 4));
