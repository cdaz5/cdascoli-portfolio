export { default as lightTheme } from './light';

export const colorLookup = (colorType = 'main') => ({
  theme: { colors },
  variant,
}) => colors[variant ?? colorType];
