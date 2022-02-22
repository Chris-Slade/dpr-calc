import { Advantage } from 'types';

export default (advantage: Advantage) =>
  advantage === 'normal'
    ? 0.05
    : advantage === 'advantage'
    ? 0.0025
    : advantage === 'super_advantage'
    ? 0.000125
    : 0.0975;
