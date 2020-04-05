import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  /* defaults */
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: stretch;
  /* flex specific props */
  ${({ flexDirection }) =>
    flexDirection &&
    `
      flex-direction: ${flexDirection};
    `}
  ${({ flexWrap }) =>
    flexWrap &&
    `
      flex-wrap: ${flexWrap};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    `
      justify-content: ${justifyContent};
    `}
  ${({ alignContent }) =>
    alignContent &&
    `
      align-content: ${alignContent};
    `}
  ${({ alignItems }) =>
    alignItems &&
    `
      align-items: ${alignItems};
    `}
  /* generic props */
  ${({ margin }) =>
    margin &&
    `
      margin: ${margin};
    `}
  ${({ padding }) =>
    padding &&
    `
      padding: ${padding};
    `}
  ${({ width }) =>
    width &&
    `
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    `
      height: ${height};
    `}
  ${({ maxHeight }) =>
    maxHeight &&
    `
      max-height: ${maxHeight};
    `}
  ${({ overflowY }) =>
    overflowY &&
    `
      overflow-y: ${overflowY};
    `}
  ${({ flex }) =>
    flex &&
    `
      flex: ${flex};
    `}
  ${({ position }) =>
    position &&
    `
      position: ${position};
    `}
`;

export default StyledFlex;
