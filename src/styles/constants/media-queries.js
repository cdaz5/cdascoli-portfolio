const customMediaQuery = ({ maxOrMin, width }) =>
  `@media (${maxOrMin}-width: ${width}px)`;

const MEDIA_QUERIES = {
  maxIPhone: customMediaQuery({ maxOrMin: 'max', width: 420 }),
  maxXLIPhone: customMediaQuery({ maxOrMin: 'max', width: 743 }),
  maxIPadMini: customMediaQuery({ maxOrMin: 'max', width: 768 }),
  maxIPad: customMediaQuery({ maxOrMin: 'max', width: 945 }),
  maxSmall: customMediaQuery({ maxOrMin: 'max', width: 768 }),
  maxMedium: customMediaQuery({ maxOrMin: 'max', width: 1024 }),
  maxLarge: customMediaQuery({ maxOrMin: 'max', width: 1280 }),
};

export default MEDIA_QUERIES;
