export { default as lightTheme } from './light';

export const colorLookup = (colorType) => ({ theme: { colors }, variant }) =>
  colors[variant ?? 'main'];
