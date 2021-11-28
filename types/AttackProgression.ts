type AttackProgression = '' | 'Fighter' | 'Generic Martial' | 'Cantrip';

export const AttackProgressionLevels = Object.freeze({
  ['Fighter']: [1, 5, 11, 20],
  ['Generic Martial']: [1, 5],
  ['Cantrip']: [1, 5, 11, 17],
} as const);

export default AttackProgression;
