export { default as lightTheme } from './light';
export { default as darkTheme } from './dark';

export const colorLookup = (colorType = 'main') => ({
  theme: { colors },
  variant,
}) => colors[variant ?? colorType];
