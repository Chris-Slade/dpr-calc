export const cantripAttacks = (level: number) =>
  level < 5 ? 1 : level < 11 ? 2 : level < 17 ? 3 : 4;

export const fighterAttacks = (level: number) =>
  level < 5 ? 1 : level < 11 ? 2 : level < 20 ? 3 : 4;
